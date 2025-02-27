import Colors from "@/constants/Colors";
import { StyleSheet, View, useColorScheme } from "react-native";

export const Separator = () => {
	const colorScheme = useColorScheme();

	return (
		<View
			style={[
				styles.separator,
				{ backgroundColor: Colors[colorScheme ?? "light"].borderColor },
			]}
		/>
	);
};

const styles = StyleSheet.create({
	separator: {
		height: 1,
		width: "80%",
	},
});
