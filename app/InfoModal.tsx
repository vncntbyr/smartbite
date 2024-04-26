import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { ExternalLink } from '@/components/ExternalLink';
import { useTranslation } from '@/hooks/useTranslation';

export default function InfoModal() {
  const t = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={styles.title}>{t('infoModal.sourceTitle')}</Text>
      <Text>{t('infoModal.sourceText')}</Text>
      <Text style={styles.title}>{t('infoModal.contributionTitle')}</Text>
      <Text>{t('infoModal.contributionText')}</Text>
      <Text>
        {t('infoModal.furtherInformation')}{' '}
        <ExternalLink
          href={'https://de.openfoodfacts.org/'}
        >
          {t('infoModal.externalLink')}
        </ExternalLink>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 50,
    backgroundColor: 'transparent',
    gap: 4,
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
