import { Text, View } from "@/components/atoms/Themed";
import { icons } from "@/constants/icons";
import { StyleSheet } from "react-native";
import { Bar } from "../atoms/Bar";

type IngredientBarProps = {
	ingredientName: string;
	isVegan: boolean;
	isVegetarian: boolean;
};

export function IngredientBar({
	ingredientName,
	isVegan = false,
	isVegetarian = false,
}: IngredientBarProps): JSX.Element {
	return (
		<Bar>
			<Text style={styles.ingredientTitle}>{ingredientName}</Text>
			<View style={styles.iconContainer}>
				{isVegan ? icons.veganIcon : icons.nonVeganIcon}
				{isVegetarian ? icons.vegetarianIcon : icons.meatIcon}
			</View>
		</Bar>
	);
}

const styles = StyleSheet.create({
	ingredientTitle: {
		fontSize: 16,
	},
	iconContainer: {
		backgroundColor: "transparent", // required for dark mode to work
		flexDirection: "row",
		gap: 8,
	},
});
