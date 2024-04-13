import { VeganIcon } from '@/icons/VeganIcon';
import { VegetarianIcon } from '@/icons/VegetarianIcon';
import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { getCorrectColor } from '@/utils/color';

type IngredientItemProps = {
  ingredientName: string;
  isVegan: boolean;
  isVegetarian: boolean;
};

export function IngredientItem({
  ingredientName,
  isVegan = false,
  isVegetarian = false,
}: IngredientItemProps): JSX.Element {
  return (
    <View style={[styles.ingredientBar, { backgroundColor: getCorrectColor('gray') }]}>
      <Text style={styles.ingredientTitle}>{ingredientName}</Text>
      <View style={styles.iconContainer}>
        {isVegan && <VeganIcon width={32} height={32} />}
        {isVegetarian && <VegetarianIcon width={32} height={32} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientBar: {
    flex: 1,
    paddingHorizontal: 24,
    height: 64,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredientTitle: {
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: 'transparent', // required for dark mode to work
    flexDirection: 'row',
    gap: 8,
  },
});
