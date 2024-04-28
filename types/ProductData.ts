import type { Ingredient } from './Ingredient';
import type { Scores } from './Scores';

export type ProductData = {
  barcode: string;
  ingredients: Ingredient[];
  imgUrl: string;
  thumbnailUrl: string;
  nutrients: any;
  productName: string;
  scores?: Scores;
};
