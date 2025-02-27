import type { PropsWithChildren } from "react";
import {
	View as ContainerView,
	type ViewProps,
	type ViewStyle,
} from "react-native";
import { View } from "./Themed";

type VStackProps = PropsWithChildren<{
	gap?: number;
	flex?: number;
	style?: ViewStyle;
	otherProps?: ViewProps; //ComponentProps<typeof View>
	isContainerView?: boolean;
}>;

export function VStack({
	children,
	gap,
	flex = 1,
	style,
	otherProps,
	isContainerView = false,
}: VStackProps) {
	const ViewComponent = isContainerView ? ContainerView : View;

	return (
		<ViewComponent
			style={[{ gap: gap }, { flex: flex }, style]}
			{...otherProps}
		>
			{children}
		</ViewComponent>
	);
}
