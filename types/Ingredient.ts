export type Ingredient = {
	name: string;
	isVegan: boolean;
	isVegetarian: boolean;
};

export type IngredientSection = {
	title: string | null;
	data: Ingredient[];
};
