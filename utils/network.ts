import type { ProductData } from '@/types/ProductData';
import { getImgUrl, getIngredients, getNutrients, getScores } from './dataMapper';

export const fetchProductData = async (barcode: string): Promise<ProductData> => {
  if (!barcode) return Promise.reject('No barcode provided');
  const result = await fetch(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
  const foodData = await result.json();
  return {
    barcode,
    ingredients: getIngredients(foodData),
    imgUrl: getImgUrl(foodData).normal,
    thumbnailUrl: getImgUrl(foodData).thumb,
    nutrients: getNutrients(foodData),
    productName: foodData.product.product_name,
    scores: getScores(foodData),
  };
};
