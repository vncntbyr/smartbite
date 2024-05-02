import { Platform, StyleSheet } from 'react-native';
import { View, Text } from '../atoms/Themed';

export const ListEmptyComponent = (): JSX.Element => {
  // The transform is required because the list inversion causes the text to be mirrored horizontally
  // Android additionally mirrors the text vertically (for whatever devilish reason)
  return (
    <View
      style={[
        styles.container,
        {
          transform: [
            { rotateX: '180deg' },
            { rotateY: `${Platform.OS === 'android' ? '180deg' : '0deg'}` },
          ],
          justifyContent: 'center',
        },
      ]}
    >
      <Text>No history available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
