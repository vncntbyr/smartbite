import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useBarcodeStore } from '@/hooks/useBarcodeStore';
import { getHistoryData } from '@/utils/dataMapper';
import useSWR from 'swr';
import { ProductOverview } from '@/components/ProductOverview';
import { IngredientItem } from '@/components/IngredientItem';
import type { Ingredient } from '@/types/Ingredient';
import { addToHistory } from '@/storage/store';
import { BarList } from '@/components/BarList';
import { NoBarcodeScanned } from '@/components/NoBarcodeScanned';
import { CameraButton } from '@/components/CameraButton';
import { useProductStore } from '@/storage/productData';
import { fetchProductData } from '@/utils/network';
import { OverviewScreenSkeleton } from '@/components/Skeletons/OverviewScreenSkeleton';

export default function OverviewScreen() {
  const { setActiveProduct } = useProductStore();
  // const { barcode } = useBarcodeStore();
  // Studentenfutter 4008258154229, Nudelsuppe 737628064502, Salami 20036362, lasagna 4388860553840, hefeweizen 4066600641964, radler 4043800017713, Erdnussbutter 4055732632001
  const barcode = '4055732632001';
  const { data: productData, isLoading, error } = useSWR(barcode, fetchProductData);

  useEffect(() => {
    setActiveProduct(productData);
    addToHistory(getHistoryData(productData));
  }, [productData]);

  if (isLoading) return <OverviewScreenSkeleton />;

  if (!productData) return <NoBarcodeScanned />;

  const { ingredients, imgUrl, nutrients, productName, scores } = productData;

  return (
    <View style={styles.container}>
      <ProductOverview
        imgUrl={imgUrl}
        productName={productName}
        nutrients={nutrients}
        {...scores}
      />
      <View style={styles.ingredientContainer}>
        <Text style={styles.title}>Ingredients</Text>
        <BarList
          data={ingredients}
          renderItem={({ item }: { item: Ingredient }): JSX.Element => {
            return (
              <IngredientItem
                ingredientName={item.name}
                isVegan={item.isVegan}
                isVegetarian={item.isVegetarian}
              />
            );
          }}
        />
      </View>
      <CameraButton style={styles.cameraButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 16,
  },
  ingredientContainer: {
    flex: 2,
    gap: 8,
    alignItems: 'flex-start',
    width: '90%',
  },
});
