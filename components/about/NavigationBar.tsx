import { StyleSheet } from 'react-native';
import { View, Text } from '../atoms/Themed';
import { Feather } from '@expo/vector-icons';
import type { PropsWithChildren } from 'react';
import { ShadowView } from '../atoms/ShadowView';

type NavigationBarProps = PropsWithChildren<{
  icon?: JSX.Element;
  shadow?: boolean;
}>;

export const NavigationBar = ({
  icon,
  children,
  shadow = false,
}: NavigationBarProps): JSX.Element => {
  const ContainerView = shadow ? ShadowView : View;
  return (
    <ContainerView style={styles.container}>
      <View style={styles.contentContainer}>
        {icon && icon}
        <Text style={styles.text}>{children}</Text>
      </View>
      <Feather name="arrow-right" size={24} color="black" />
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  contentContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    fontSize: 20,
  },
});
