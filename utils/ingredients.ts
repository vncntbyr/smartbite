import type { Ingredient, IngredientSection } from "@/types/Ingredient";

const removeUnderscores = (ingredient: string) => {
	return ingredient.replace(/_/g, "");
};

const extractIngredients = (ingredients: any[]): Ingredient[] => {
	let result: Ingredient[] = [];

	for (const ingredient of ingredients) {
		if (ingredient.ingredients) {
			result = result.concat(extractIngredients(ingredient.ingredients));
		} else {
			result.push({
				name: removeUnderscores(ingredient.text),
				isVegan: ingredient.vegan === "no" ? false : true,
				isVegetarian: ingredient.vegetarian === "no" ? false : true,
			});
		}
	}

	return result;
};

export const getIngredients = (data: any): IngredientSection[] => {
	const extractIngredientSection = (
		ingredients: any[],
	): IngredientSection[] => {
		const result: IngredientSection[] = [];

		for (const ingredient of ingredients) {
			if (ingredient.ingredients) {
				result.push({
					title: removeUnderscores(ingredient.text),
					data: extractIngredients(ingredient.ingredients),
				});
			} else {
				result.push({
					title: null,
					data: [
						{
							name: removeUnderscores(ingredient.text),
							isVegan: ingredient.vegan === "no" ? false : true,
							isVegetarian: ingredient.vegetarian === "no" ? false : true,
						},
					],
				});
			}
		}

		return result;
	};

	return extractIngredientSection(data.product.ingredients);
};
