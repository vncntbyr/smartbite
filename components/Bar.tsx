import { StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';
import { ShadowView } from './ShadowView';

export function Bar({ children }: PropsWithChildren): JSX.Element {
  return <ShadowView style={styles.bar}>{children}</ShadowView>;
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    paddingHorizontal: 24,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
