import { getShadowBorderColor } from "@/utils/color";
import { Children } from "react";
import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { ShadowView } from "../atoms/ShadowView";
import { View } from "../atoms/Themed";

export const NavigationGroup = ({
	children,
}: PropsWithChildren): JSX.Element => {
	const childrenArray = Children.toArray(children);
	const childrenWithSeparator = childrenArray.flatMap((child, index) => {
		if (index === childrenArray.length - 1) {
			return child; // Don't add separator for the last child
		} else {
			return [
				child,
				<View
					key={`separator-${index}`}
					style={[
						styles.separator,
						{ backgroundColor: getShadowBorderColor("black") },
					]}
				/>,
			];
		}
	});

	return (
		<ShadowView style={styles.container}>{childrenWithSeparator}</ShadowView>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
	},
	separator: {
		height: 1,
		marginVertical: 5,
	},
});
