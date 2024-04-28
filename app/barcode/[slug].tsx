import { ProductOverview } from '@/components/ProductOverview';
import { Text, View } from '@/components/Themed';
import { useProductStore } from '@/storage/productData';
import { StyleSheet } from 'react-native';

export default function Page() {
  // TODO: dont get the active product because the active product != the product that was clicked in history screen
  // TODO: maybe refetch product data here but check whether activeProduct.barcode === our url barcode to save data?
  const { activeProduct } = useProductStore();
  if (!activeProduct) return <Text>Something went wrong...</Text>;
  const { imgUrl, productName, nutrients, scores } = activeProduct;
  return (
    <View style={styles.container}>
      <ProductOverview
        imgUrl={imgUrl}
        productName={productName}
        nutrients={nutrients}
        {...scores}
      />
      <View style={styles.test}>
        <Text>Home page for {activeProduct?.productName}</Text>
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
  test: {
    flex: 2,
  },
});
