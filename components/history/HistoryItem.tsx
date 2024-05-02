import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/atoms/Themed';
import { Bar } from '../atoms/Bar';
import type { HistoryData } from '@/types/History';
import { Image } from 'expo-image';
import { BarcodeLinkWrapper } from './BarcodeLinkWrapper';

export function HistoryItem({ name, barcode, thumbnailUrl }: HistoryData): JSX.Element {
  return (
    <BarcodeLinkWrapper barcode={barcode}>
      <Bar>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Image source={{ uri: thumbnailUrl }} style={{ width: 32, height: 32 }} />
          <Text style={styles.productName}>{name}</Text>
        </View>
      </Bar>
    </BarcodeLinkWrapper>
  );
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 16,
  },
});
