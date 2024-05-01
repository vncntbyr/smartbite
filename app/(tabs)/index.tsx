import { StyleSheet } from 'react-native';
import { ProductDetailScreen } from '@/components/ProductDetailScreen';

export default function OverviewScreen() {
  // const { barcode } = useBarcodeStore();
  // Studentenfutter 4008258154229, Nudelsuppe 737628064502, Salami 20036362, lasagna 4388860553840, hefeweizen 4066600641964, radler 4043800017713, Erdnussbutter 4055732632001
  const barcode = '4055732632001';

  return <ProductDetailScreen barcode={barcode} isScanPage={true} />;
}

const styles = StyleSheet.create({
  cameraButton: {
    position: 'absolute',
    bottom: 16,
  },
});
