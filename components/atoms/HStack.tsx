import { StyleSheet, ViewProps, ViewStyle, View as ContainerView } from 'react-native';
import { View } from './Themed';
import type { PropsWithChildren } from 'react';

type HStackProps = PropsWithChildren<{
  gap?: number;
  style?: ViewStyle;
  otherProps?: ViewProps; //ComponentProps<typeof View>
  isContainerView?: boolean;
}>;

export function HStack({ children, gap, style, otherProps, isContainerView = false }: HStackProps) {
  let ViewComponent = isContainerView ? ContainerView : View;
  return (
    <ViewComponent style={[styles.hStack, { gap: gap }, style]} {...otherProps}>
      {children}
    </ViewComponent>
  );
}

const styles = StyleSheet.create({
  hStack: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
