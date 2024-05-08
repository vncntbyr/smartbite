import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';

type ContainerViewProps = PropsWithChildren<{
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  scrollable?: boolean;
  style?: ViewStyle;
  gap?: number;
}>;

export const ContainerView = ({
  children,
  centerHorizontal,
  centerVertical,
  scrollable,
  gap,
  style,
}: ContainerViewProps) => {
  const ContainerView = scrollable ? ScrollView : View;
  return (
    <ContainerView
      style={[
        styles.container,
        style,
        centerHorizontal && { alignItems: 'center' },
        centerVertical && { justifyContent: 'center' },
        { gap },
      ]}
    >
      {children}
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
