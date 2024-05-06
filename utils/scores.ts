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

const getColorForNumericScore = (score: number): string => {
  switch (score) {
    case 4:
      return '#D73027';
    case 3:
      return '#FDAE61';
    case 2:
      return '#dbbb07';
    case 1:
      return '#1A9850';
    default:
      return 'white';
  }
};

const getColorForNutriScore = (score: NutriScore['value']): string => {
  switch (score?.toLowerCase()) {
    case 'a':
      return '#1A9850';
    case 'b':
      return '#91CF60';
    case 'c':
      return '#dbbb07';
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
    value: nutriScore?.toUpperCase() as NutriScore['value'],
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

export const getNovaScoreExplanation = (novaScore: NovaScore): string => {
  switch (novaScore?.value?.toString()) {
    case '1':
      return 'scores.processedGrade.1';
    case '2':
      return 'scores.processedGrade.2';
    case '3':
      return 'scores.processedGrade.3';
    case '4':
      return 'scores.processedGrade.4';
    default:
      return '';
  }
};

export const getNutriScoreExplanation = (nutriScore: NutriScore): string => {
  switch (nutriScore.value) {
    case 'A':
      return 'scores.nutrition.A';
    case 'B':
      return 'scores.nutrition.B';
    case 'C':
      return 'scores.nutrition.C';
    case 'D':
      return 'scores.nutrition.D';
    case 'E':
      return 'scores.nutrition.E';
    default:
      return '';
  }
};

export const getPlantScoreExplanation = (plantScore: PlantScore): string => {
  switch (plantScore.value.toString()) {
    case '1':
      return 'scores.plantGrade.1';
    case '2':
      return 'scores.plantGrade.2';
    case '3':
      return 'scores.plantGrade.3';
    case '4':
      return 'scores.plantGrade.4';
    default:
      return '';
  }
};
