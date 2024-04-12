import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { useBarcodeStore } from '@/hooks/useBarcodeStore';
import { getImgUrl, getIngredients, getNutrients } from '@/utils/dataMapper';
import { ProductOverview } from '@/components/ProductOverview';
import { IngredientItem } from '@/components/IngredientItem';

export default function TabOneScreen() {
  const [ingredients, setIngredients] = useState<string[]>();
  const [imgUrl, setImgUrl] = useState<string>(''); // TODO: handle what happens when there is no image url
  const [nutrients, setNutrients] = useState<Record<string, number>>({}); // TODO: handle what happens when there is no image url
  const [productName, setProductName] = useState<string>(''); // TODO: handle what happens when there is no image url
  // const { barcode } = useBarcodeStore();
  const barcode = '4008258154229';
  useEffect(() => {
    if (!barcode) return;
    const getFoodData = async () => {
      const result = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
      const foodData = await result.json();
      setIngredients(getIngredients(foodData));
      setProductName(foodData.product.product_name);
      setImgUrl(getImgUrl(foodData));
      setNutrients(getNutrients(foodData));
    };
    getFoodData();
  }, [barcode]);

  return (
    <View style={styles.container}>
      <ProductOverview imgUrl={imgUrl} productName={productName} nutrients={nutrients} />
      <View style={styles.ingredientContainer}>
        <Text style={styles.title}>Ingredients</Text>
        <FlatList
          data={ingredients}
          contentContainerStyle={styles.ingredientContentContainer}
          style={styles.ingredientList}
          renderItem={({ item }) => (
            <IngredientItem ingredientName={item} style={styles.ingredientList} />
          )}
        />
      </View>
      <Link href="/CameraModal" asChild>
        <Pressable style={styles.cameraButton}>
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
    justifyContent: 'center',
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
    backgroundColor: 'lightblue',
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
  ingredientContentContainer: {
    gap: 6,
  },
  ingredientList: {
    width: '100%',
  },
});
