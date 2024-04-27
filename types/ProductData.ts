import type { Ingredient } from './Ingredient';
import type { Scores } from './Scores';

export type ProductData = {
  ingredients: Ingredient[];
  imgUrl: string;
  nutrients: any;
  productName: string;
  scores?: Scores;
};
