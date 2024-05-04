import { ProductDetailScreen } from '@/components/screens/ProductDetailScreen';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Page() {
  const { slug: barcode } = useLocalSearchParams();

  // This should never be able to happen -> only if there is a programmatic error in the navigation.
  if (Array.isArray(barcode)) return;

  return <ProductDetailScreen barcode={barcode} isScanPage={false} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  test: {
    flex: 2,
  },
});
