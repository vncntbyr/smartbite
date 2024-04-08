import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { useBearStore } from '@/hooks/useBarcodeStore';
import { getAllergensFromData } from '@/utils/dataMapper';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
  const [allergens, setAllergens] = useState();
  const { barcode } = useBearStore();

  useEffect(() => {
    if (!barcode) return;
    const getFoodData = async () => {
      const result = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
      const foodData = await result.json();
      const allergens = getAllergensFromData(foodData);
      setAllergens(allergens);
    };
    getFoodData();
  }, [barcode]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{barcode}</Text>
      <Text>This product has following allergens {allergens}</Text>
      <Link href="/CameraModal" asChild>
        <Pressable>
          <Text>Open Camera Modal</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
