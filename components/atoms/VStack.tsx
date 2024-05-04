import { ViewProps, ViewStyle, View as ContainerView } from 'react-native';
import { View } from './Themed';
import type { PropsWithChildren } from 'react';

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
  let ViewComponent = isContainerView ? ContainerView : View;

  return (
    <ViewComponent style={[{ gap: gap }, { flex: flex }, style]} {...otherProps}>
      {children}
    </ViewComponent>
  );
}
