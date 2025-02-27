import type { PropsWithChildren } from "react";
import {
	View as ContainerView,
	StyleSheet,
	type ViewProps,
	type ViewStyle,
} from "react-native";
import { View } from "./Themed";

type HStackProps = PropsWithChildren<{
	gap?: number;
	style?: ViewStyle;
	otherProps?: ViewProps; //ComponentProps<typeof View>
	isContainerView?: boolean;
}>;

export function HStack({
	children,
	gap,
	style,
	otherProps,
	isContainerView = false,
}: HStackProps) {
	const ViewComponent = isContainerView ? ContainerView : View;
	return (
		<ViewComponent style={[styles.hStack, { gap: gap }, style]} {...otherProps}>
			{children}
		</ViewComponent>
	);
}

const styles = StyleSheet.create({
	hStack: {
		alignItems: "center",
		flexDirection: "row",
	},
});
