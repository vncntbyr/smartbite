import { VeganIcon } from '@/icons/VeganIcon';
import { VegetarianIcon } from '@/icons/VegetarianIcon';
import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { getShadowColor } from '@/utils/color';
import { MeatIcon } from '@/icons/MeatIcon';
import { NonVeganIcon } from '@/icons/NonVeganIcon';

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
    <View
      style={[
        styles.ingredientBar,
        {
          borderColor: getShadowColor('gray'),
          shadowColor: getShadowColor('gray'),
        },
      ]}
    >
      <Text style={styles.ingredientTitle}>{ingredientName}</Text>
      <View style={styles.iconContainer}>
        {isVegan ? <VeganIcon width={32} height={32} /> : <NonVeganIcon width={32} height={32} />}
        {isVegetarian ? (
          <VegetarianIcon width={32} height={32} />
        ) : (
          <MeatIcon width={32} height={32} />
        )}
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
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
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
