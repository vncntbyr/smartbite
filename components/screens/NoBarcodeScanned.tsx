import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet } from "react-native";
import { CameraButton } from "../atoms/CameraButton";
import { Text, View } from "../atoms/Themed";

export function NoBarcodeScanned() {
	const t = useTranslation();
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{t("scanner.description")}</Text>
			<CameraButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
	},
	text: {
		textAlign: "center",
		fontSize: 20,
	},
});
