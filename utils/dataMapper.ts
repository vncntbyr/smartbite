export const getAllergens = (data: any): any => {
  //console.log(Object.keys(data.product));
  return data.product['allergens_from_ingredients'];
};

export const getIngredients = (data: any): string[] => {
  const ingredients = data.product.ingredients;

  return ingredients.map((ingredient: any) => ingredient.text);
};
