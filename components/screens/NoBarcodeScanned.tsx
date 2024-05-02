import { StyleSheet } from 'react-native';
import { View, Text } from '../atoms/Themed';
import { useTranslation } from '@/hooks/useTranslation';
import { CameraButton } from '../atoms/CameraButton';

export function NoBarcodeScanned() {
  const t = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('scanner.description')}</Text>
      <CameraButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
