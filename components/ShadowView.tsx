import { getShadowColor } from '@/utils/color';
import type { PropsWithChildren } from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import { View } from './Themed';

type ShadowViewProps = PropsWithChildren<{
  style?: ViewStyle;
}>;

export const ShadowView = ({ children, style }: ShadowViewProps): JSX.Element => {
  return (
    <View
      style={[
        styles.shadowStyle,
        style,
        {
          borderColor: getShadowColor('gray'),
          shadowColor: getShadowColor('gray'),
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    borderRadius: 8,
    borderWidth: 0.5,
  },
});
