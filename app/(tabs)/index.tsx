import { FlatList, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { useBarcodeStore } from '@/hooks/useBarcodeStore';
import { getAllergens, getIngredients } from '@/utils/dataMapper';
import { useEffect, useState } from 'react';

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tab One</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.ingredientContainer}>
        <Link href="/CameraModal" asChild>
          <Pressable style={styles.cameraButton}>
            <Text>Open Barcode Scanner</Text>
          </Pressable>
        </Link>
        <Text>This is the barcode: {barcode}</Text>
        <Text>This product has the following ingredients:</Text>
        <FlatList data={ingredients} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
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
  titleContainer: {
    flex: 1,
    marginTop: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  cameraButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'blue',
    alignItems: 'center',
    width: '80%',
  },
  ingredientContainer: {
    flex: 2,
    gap: 8,
    alignItems: 'center',
  },
});
