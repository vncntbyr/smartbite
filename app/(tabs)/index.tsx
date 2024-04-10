import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { useBarcodeStore } from '@/hooks/useBarcodeStore';
import { getIngredients } from '@/utils/dataMapper';
import { useEffect, useState } from 'react';
import { ProductOverview } from '@/components/ProductOverview';

export default function TabOneScreen() {
  const [ingredients, setIngredients] = useState<string[]>();
  const { barcode } = useBarcodeStore();

  useEffect(() => {
    if (!barcode) return;
    const getFoodData = async () => {
      const result = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
      const foodData = await result.json();
      setIngredients(getIngredients(foodData));
    };
    getFoodData();
  }, [barcode]);

  return (
    <View style={styles.container}>
      <ProductOverview productName={'Tortilla Chips'} calories={450} />
      <View style={styles.ingredientContainer}>
        <Text style={styles.title}>Ingredients</Text>
        <FlatList data={ingredients} renderItem={({ item }) => <Text>{item}</Text>} />
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
});
