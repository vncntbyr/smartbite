import { StyleSheet } from 'react-native';
import { View, Text } from './Themed';
import { Feather } from '@expo/vector-icons';
import type { PropsWithChildren } from 'react';

type NavigationBarProps = PropsWithChildren<{
  icon?: JSX.Element;
}>;

export const NavigationBar = ({ icon, children }: NavigationBarProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {icon && icon}
        <Text style={styles.text}>{children}</Text>
      </View>
      <Feather name="arrow-right" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
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
});
