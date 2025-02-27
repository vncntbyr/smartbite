import type { IngredientSection } from "./Ingredient";
import type { Scores } from "./scores";

export type ProductData = {
	barcode: string;
	ingredients: IngredientSection[];
	imgUrl: string;
	thumbnailUrl: string;
	nutrients: any;
	productName: string;
	scores?: Scores;
};
