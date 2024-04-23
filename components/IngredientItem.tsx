import { VeganIcon } from '@/icons/VeganIcon';
import { VegetarianIcon } from '@/icons/VegetarianIcon';
import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { MeatIcon } from '@/icons/MeatIcon';
import { NonVeganIcon } from '@/icons/NonVeganIcon';
import { Bar } from './Bar';

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
    <Bar>
      <Text style={styles.ingredientTitle}>{ingredientName}</Text>
      <View style={styles.iconContainer}>
        {isVegan ? <VeganIcon width={32} height={32} /> : <NonVeganIcon width={32} height={32} />}
        {isVegetarian ? (
          <VegetarianIcon width={32} height={32} />
        ) : (
          <MeatIcon width={32} height={32} />
        )}
      </View>
    </Bar>
  );
}

const styles = StyleSheet.create({
  ingredientTitle: {
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: 'transparent', // required for dark mode to work
    flexDirection: 'row',
    gap: 8,
  },
});
