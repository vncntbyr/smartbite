import { StyleSheet, View } from 'react-native';
import { Text } from '@/components/Themed';
import Skeleton from '@/components/Skeleton';

export function ScanPageSkeleton() {
  return (
    <View style={styles.container}>
      <Skeleton width={'90%'} flex={1} marginTop={16} />
      <View style={styles.ingredientContainer}>
        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.ingredientContentContainer}>
          <Skeleton height={64} />
          <Skeleton height={64} />
          <Skeleton height={64} />
          <Skeleton height={64} />
          <Skeleton height={64} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingredientContainer: {
    flex: 2,
    gap: 8,
    alignItems: 'flex-start',
    width: '90%',
  },
  ingredientContentContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    gap: 8,
    padding: 2,
  },
});
