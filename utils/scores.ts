import type { NovaScore, NutriScore, PlantScore, Scores } from '@/types/Scores';
import type { ColorType } from '@/constants/Colors';

export const getScores = (data: any): Scores => {
  const { grade, negative_points, positive_points, score } = data.product.nutriscore_data;
  return {
    novaScore: getNovaScore(data.product.nova_group),
    nutriScore: getNutriScore(grade),
    negativePoints: negative_points,
    positivePoints: positive_points,
    plantScore: getPlantScore(data.product.ingredients),
  };
};

const getColorForNumericScore = (score: number): keyof ColorType => {
  switch (score) {
    case 4:
      return 'red';
    case 3:
      return 'orange';
    case 2:
      return 'yellow';
    case 1:
      return 'green';
    default:
      return 'white';
  }
};

const getColorForNutriScore = (score: NutriScore['value']): string => {
  switch (score.toLowerCase()) {
    case 'a':
      return '#1A9850';
    case 'b':
      return '#91CF60';
    case 'c':
      return '#FFEE8A';
    case 'd':
      return '#FDAE61';
    case 'e':
      return '#D73027';
    default:
      return '#FFFFFF';
  }
};

const getPlantScore = (ingredients: any): PlantScore => {
  const veganIngredients = ingredients.some((ingredient: any) => ingredient.vegan === 'no') ? 2 : 0;
  const vegetarianIngredients = ingredients.some(
    (ingredient: any) => ingredient.vegetarian === 'no'
  );

  const value = veganIngredients + vegetarianIngredients + 1;

  const color = getColorForNumericScore(value);

  return {
    value,
    color,
  };
};

const getNutriScore = (nutriScore: NutriScore['value']): NutriScore => {
  return {
    value: nutriScore.toUpperCase() as NutriScore['value'],
    color: getColorForNutriScore(nutriScore),
  };
};

const getNovaScore = (value: NovaScore['value']): NovaScore => {
  const color = getColorForNumericScore(parseInt(value));
  return {
    value,
    color,
  };
};
