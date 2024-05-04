import { StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { View } from './Themed';

export function VStack({
  children,
  gap,
  flex,
  style,
  otherProps,
}: {
  children: any;
  gap?: number;
  flex?: number;
  style?: ViewStyle;
  otherProps?: ViewProps; //ComponentProps<typeof View>
}) {
  return (
    <View style={[styles.hStack, { gap: gap }, { flex: flex }, style]} {...otherProps}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  hStack: {
    display: 'flex',
    flexDirection: 'column',
  },
});
