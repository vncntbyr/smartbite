import { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
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
import type { Scores } from '@/types/Scores';
import type { Ingredient } from '@/types/Ingredient';
import { getBackgroundColor } from '@/utils/color';
import { addToHistory } from '@/storage/store';
import { BarList } from '@/components/BarList';

export default function TabOneScreen() {
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [imgUrl, setImgUrl] = useState<string>(''); // TODO: handle what happens when there is no image url
  const [nutrients, setNutrients] = useState<Record<string, number>>({}); // TODO: handle what happens when there is no image url
  const [productName, setProductName] = useState<string>(''); // TODO: handle what happens when there is no image url
  const [scores, setScores] = useState<Scores>(); // TODO: handle what happens when there is no image url
  // const { barcode } = useBarcodeStore();
  // Studentenfutter 4008258154229, Nudelsuppe 737628064502, Salami 20036362
  const barcode = '20036362';
  useEffect(() => {
    if (!barcode) return;
    const getFoodData = async () => {
      const result = await fetch(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
      const foodData = await result.json();
      // TODO: compress to one function which returns an object containing all the data
      setIngredients(getIngredients(foodData));
      setProductName(foodData.product.product_name);
      setImgUrl(getImgUrl(foodData).normal);
      setNutrients(getNutrients(foodData));
      setScores(getScores(foodData));
      addToHistory(getHistoryData(foodData));
      // add to history
    };
    getFoodData();
  }, [barcode]);

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
      <Link
        href="/CameraModal"
        asChild
        style={[styles.cameraButton, { backgroundColor: getBackgroundColor('blue') }]}
      >
        <Pressable>
          <Text style={styles.cameraButtonText}>Open Scanner</Text>
        </Pressable>
      </Link>
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cameraButtonText: {
    fontSize: 16,
  },
  ingredientContainer: {
    flex: 2,
    gap: 8,
    alignItems: 'flex-start',
    width: '90%',
  },
});
