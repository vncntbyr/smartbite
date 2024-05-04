import { StyleSheet, View as ContainerView } from 'react-native';

import { Text, View } from '@/components/atoms/Themed';

export default function AboutScreen() {
  return (
    <ContainerView style={styles.container}>
      <Text style={styles.title}>About</Text>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
