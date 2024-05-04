import { StyleSheet, ViewProps, ViewStyle, View as ContainerView } from 'react-native';
import { View } from './Themed';

type VStackProps = {
  children: JSX.Element[] | JSX.Element;
  gap?: number;
  flex?: number;
  style?: ViewStyle;
  otherProps?: ViewProps; //ComponentProps<typeof View>
  isContainerView?: boolean;
};

export function VStack({
  children,
  gap,
  flex,
  style,
  otherProps,
  isContainerView = false,
}: VStackProps) {
  let ViewComponent = isContainerView ? ContainerView : View;

  return (
    <ViewComponent style={[styles.hStack, { gap: gap }, { flex: flex }, style]} {...otherProps}>
      {children}
    </ViewComponent>
  );
}

const styles = StyleSheet.create({
  hStack: {
    display: 'flex',
    flexDirection: 'column',
  },
});
