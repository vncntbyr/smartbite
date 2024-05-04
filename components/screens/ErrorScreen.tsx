import { StyleSheet } from 'react-native';
import { Text } from '../atoms/Themed';
import { Image } from 'expo-image';
import { VStack } from '../atoms/VStack';

export const ErrorScreen = () => {
  return (
    <VStack flex={1} gap={16} style={styles.center} isContainerView>
      <Text style={styles.error}>Oh no!</Text>
      <Image
        style={styles.errorImage}
        contentFit="cover"
        source={require('../../images/error_dachshund.png')}
      />
      <Text style={styles.error}>It looks like something went wrong!</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImage: {
    width: '50%',
    height: '50%',
    aspectRatio: 3 / 2,
  },
  error: {
    fontSize: 20,
  },
});
