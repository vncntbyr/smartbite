import type { HistoryData } from '@/types/History';
import type { Images } from '@/types/Image';
import type { Ingredient } from '@/types/Ingredient';
import type { ProductData } from '@/types/ProductData';
import type { Scores } from '@/types/Scores';

export const getAllergens = (data: any): any => {
  return data.product['allergens_from_ingredients'];
};

export const getIngredients = (data: any): Ingredient[] => {
  const extractIngredients = (ingredients: any[]): Ingredient[] => {
    const removeUnderscores = (ingredient: string) => {
      return ingredient.replace(/_/g, '');
    };
    let result: Ingredient[] = [];

    for (const ingredient of ingredients) {
      if (ingredient.ingredients) {
        result = result.concat(extractIngredients(ingredient.ingredients));
      } else {
        result.push({
          name: removeUnderscores(ingredient.text),
          isVegan: ingredient.vegan === 'yes' ? true : false,
          isVegetarian: ingredient.vegetarian === 'yes' ? true : false,
        });
      }
    }

    return result;
  };

  return extractIngredients(data.product.ingredients);
};

export const getImgUrl = (data: any): Images => {
  return {
    normal: data.product.image_url,
    thumb: data.product.image_thumb_url,
    small: data.product.image_small_url,
  };
};

export const getNutrients = (data: any): any => {
  const {
    carbohydrates,
    fat,
    proteins,
    'energy-kcal': energyKcal,
    'energy-kcal_unit': energyKcalUnit,
    sugars,
    salt,
  } = data.product.nutriments;
  return {
    carbohydrates,
    fat,
    proteins,
    energyKcal,
    energyKcalUnit,
    sugars,
    salt,
  };
};

const mapNutriGradeToScore = (nutriScore: string): number => {
  switch (nutriScore) {
    case 'a':
      return 0;
    case 'b':
      return 1;
    case 'c':
      return 2;
    case 'd':
      return 3;
    case 'e':
      return 4;
    default:
      return 5;
  }
};

const getPlantScore = (ingredients: any): number => {
  const veganIngredients = ingredients.some((ingredient: any) => ingredient.vegan === 'no') ? 2 : 0;
  const vegetarianIngredients = ingredients.some(
    (ingredient: any) => ingredient.vegetarian === 'no'
  )
    ? 2
    : 0;
  const potentiallyVegetarianIngredients = ingredients.some(
    (ingredient: any) => ingredient.vegetarian === 'maybe'
  )
    ? 1
    : 0;
  const potentiallyVeganIngredients = ingredients.some(
    (ingredient: any) => ingredient.vegan === 'maybe'
  )
    ? 1
    : 0;

  return (
    veganIngredients +
    vegetarianIngredients +
    potentiallyVegetarianIngredients +
    potentiallyVeganIngredients
  );
};

export const getScores = (data: any): Scores => {
  const novaScore = data.product.nova_group;
  const { grade, negative_points, positive_points, score } = data.product.nutriscore_data;
  return {
    novaScore,
    nutriScore: mapNutriGradeToScore(grade),
    negativePoints: negative_points,
    positivePoints: positive_points,
    plantScore: getPlantScore(data.product.ingredients),
  };
};

export const getHistoryData = (data: ProductData | undefined): HistoryData | undefined => {
  if (!data) return;
  const { barcode, productName, thumbnailUrl } = data;
  return {
    barcode,
    name: productName,
    thumbnailUrl,
  };
};
