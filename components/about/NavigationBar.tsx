import { StyleSheet } from 'react-native';
import { View, Text } from '../atoms/Themed';
import { Feather } from '@expo/vector-icons';
import type { PropsWithChildren } from 'react';
import { ShadowView } from '../atoms/ShadowView';
import { LinkWrapper } from '../atoms/LinkWrapper';

type NavigationBarProps = PropsWithChildren<{
  icon?: JSX.Element;
  shadow?: boolean;
  link: string;
}>;

export const NavigationBar = ({
  icon,
  children,
  link,
  shadow = false,
}: NavigationBarProps): JSX.Element => {
  const ContainerView = shadow ? ShadowView : View;
  return (
    <ContainerView style={styles.container}>
      <LinkWrapper style={styles.linkWrapper} link={link}>
        <View style={styles.contentContainer}>
          {icon && icon}
          <Text style={styles.text}>{children}</Text>
        </View>
        <Feather name="arrow-right" size={24} color="black" />
      </LinkWrapper>
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  linkWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  container: {
    width: '90%',
    borderRadius: 10,
  },
});
