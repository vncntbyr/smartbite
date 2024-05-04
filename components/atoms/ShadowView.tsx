import { getShadowColor } from '@/utils/color';
import type { PropsWithChildren } from 'react';
import { Platform, StyleSheet, type ViewStyle } from 'react-native';
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
          ...(Platform.OS === 'android' && { shadowColor: getShadowColor('black') }),
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
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    borderRadius: 8,
    elevation: 5,
  },
});
