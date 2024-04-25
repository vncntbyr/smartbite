import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { Bar } from './Bar';
import type { HistoryData } from '@/types/History';
import { Image } from 'expo-image';

export function HistoryItem({ name, barcode, thumbnailUrl }: HistoryData): JSX.Element {
  return (
    <Bar>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Image source={{ uri: thumbnailUrl }} style={{ width: 32, height: 32 }} />
        <Text style={styles.productName}>{name}</Text>
      </View>
    </Bar>
  );
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 16,
  },
});
