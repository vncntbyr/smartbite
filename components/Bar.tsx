import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { getShadowColor } from '@/utils/color';
import type { PropsWithChildren } from 'react';

export function Bar({ children }: PropsWithChildren): JSX.Element {
  return (
    <View
      style={[
        styles.Bar,
        {
          borderColor: getShadowColor('gray'),
          shadowColor: getShadowColor('gray'),
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  Bar: {
    flex: 1,
    paddingHorizontal: 24,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
});
