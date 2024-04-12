export const getAllergens = (data: any): any => {
  //console.log(Object.keys(data.product));
  return data.product['allergens_from_ingredients'];
};

// TODO: This is a mess and does not work, clean up!
export const getIngredients = (data: any): string[] => {
  const checkIfNested = (ingredient: any) => {
    const mapNestedIngredients = (ingredient: any) => {
      return ingredient.map((ingredient: any) => checkIfNested(ingredient));
    };
    return Array.isArray(ingredient.ingredient)
      ? mapNestedIngredients(ingredient.ingredient)
      : removeUnderscores(ingredient.text);
  };
  const removeUnderscores = (ingredient: string) => {
    return ingredient.replace(/_/g, '');
  };
  const ingredients = data.product.ingredients;

  return ingredients.map((ingredient: any) => checkIfNested(ingredient));
};

export const getImgUrl = (data: any): string => {
  return data.product.image_url;
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

export const getScores = (data: any): any => {
  const novaScore = data.product.nova_group;
  const { grade, negative_points, positive_points, score } = data.product.nutriscore_data;
  const ecoScoreData = data.product.ecoscore_data;
  return {
    novaScore,
    grade,
    negativePoints: negative_points,
    positivePoints: positive_points,
    score,
    ecoScoreData,
  };
};
