export const getAllergensFromData = (data: any): any => {
  console.log(Object.keys(data.product));
  return data.product['allergens_from_ingredients'];
};
