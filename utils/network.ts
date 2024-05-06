import type { ProductData } from '@/types/ProductData';
import { getImgUrl, getNutrients } from './dataMapper';
import { getScores } from './scores';
import { getIngredients } from './ingredients';

export const fetchProductData = async (barcode: string): Promise<ProductData> => {
  if (!barcode) return Promise.reject('No barcode provided');
  const result = await fetch(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
  // TODO: something here causes a SyntaxError: JSON Parse error: Unexpected character: <]. -> Fix / make failsafe
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
