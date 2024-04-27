import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useBarcodeStore } from '@/hooks/useBarcodeStore';
import {
  getHistoryData,
  getImgUrl,
  getIngredients,
  getNutrients,
  getScores,
} from '@/utils/dataMapper';
import { ProductOverview } from '@/components/ProductOverview';
import { IngredientItem } from '@/components/IngredientItem';
import type { Ingredient } from '@/types/Ingredient';
import { addToHistory } from '@/storage/store';
import { BarList } from '@/components/BarList';
import type { ProductData } from '@/types/ProductData';
import { NoBarcodeScanned } from '@/components/NoBarcodeScanned';
import { CameraButton } from '@/components/CameraButton';

export default function TabOneScreen() {
  const [productData, setProductData] = useState<ProductData | undefined>();
  // const { barcode } = useBarcodeStore();
  // Studentenfutter 4008258154229, Nudelsuppe 737628064502, Salami 20036362, lasagna 4388860553840, hefeweizen 4066600641964, radler 4043800017713
  const barcode = '20036362';

  const fetchData = useCallback(async (barcode: string) => {
    const result = await fetch(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
    const foodData = await result.json();
    setProductData({
      ingredients: getIngredients(foodData),
      imgUrl: getImgUrl(foodData).normal,
      nutrients: getNutrients(foodData),
      productName: foodData.product.product_name,
      scores: getScores(foodData),
    });
    addToHistory(getHistoryData(foodData));
  }, []);

  useEffect(() => {
    if (!barcode) return;
    fetchData(barcode);
  }, [barcode, fetchData]);

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
