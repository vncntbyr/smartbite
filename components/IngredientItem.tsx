import { VeganIcon } from '@/icons/VeganIcon';
import { VegetarianIcon } from '@/icons/VegetarianIcon';
import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';

export function IngredientItem({ ingredientName }: any): JSX.Element {
  return (
    <View style={styles.ingredientBar}>
      <Text>{ingredientName}</Text>
      <View style={styles.iconContainer}>
        <VeganIcon width={32} height={32} />
        <VegetarianIcon width={32} height={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientBar: {
    flex: 1,
    paddingHorizontal: 24,
    height: 64,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: 'transparent', // required for dark mode to work
    flexDirection: 'row',
    gap: 8,
  },
});
