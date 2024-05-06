import type { HistoryData } from '@/types/History';
import type { Images } from '@/types/Image';
import type { ProductData } from '@/types/ProductData';

export const getAllergens = (data: any): any => {
  return data.product['allergens_from_ingredients'];
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

export const getHistoryData = (data: ProductData | undefined): HistoryData | undefined => {
  if (!data) return;
  const { barcode, productName, thumbnailUrl } = data;
  return {
    barcode,
    name: productName,
    thumbnailUrl,
  };
};
