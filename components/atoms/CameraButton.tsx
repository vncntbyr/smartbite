import { useTranslation } from "@/hooks/useTranslation";
import { getBackgroundColor } from "@/utils/color";
import { Link, type LinkProps } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Themed";

type CameraButtonProps = {
	style?: LinkProps<typeof Link>["style"];
};

export function CameraButton({ style }: CameraButtonProps) {
	const t = useTranslation();
	return (
		<Link
			href="/(modals)/CameraModal"
			asChild
			style={[
				styles.cameraButton,
				style,
				{ backgroundColor: getBackgroundColor("blue") },
			]}
		>
			<Pressable>
				<Text style={styles.cameraButtonText}>{t("scanner.button")}</Text>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	cameraButton: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 8,
		alignItems: "center",
	},
	cameraButtonText: {
		fontSize: 16,
	},
});
