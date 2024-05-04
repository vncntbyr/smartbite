import { StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { View } from './Themed';

export function HStack({
  children,
  gap,
  style,
  otherProps,
}: {
  children: any;
  gap?: number;
  style?: ViewStyle;
  otherProps?: ViewProps; //ComponentProps<typeof View>
}) {
  return (
    <View style={[styles.hStack, { gap: gap }, style]} {...otherProps}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  hStack: {
    display: 'flex',
    flexDirection: 'row',
  },
});
