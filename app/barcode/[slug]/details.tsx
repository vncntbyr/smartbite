import { Text } from '@/components/atoms/Themed';
import { VStack } from '@/components/atoms/VStack';
import { ScoreExplanation } from '@/components/molecules/ScoreExplanation';
import { ErrorScreen } from '@/components/screens/ErrorScreen';
import { useTranslation } from '@/hooks/useTranslation';
import { fetchProductData } from '@/utils/network';
import {
  getNovaScoreExplanation,
  getNutriScoreExplanation,
  getPlantScoreExplanation,
} from '@/utils/scores';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import useSWR from 'swr';

export default function Page() {
  const t = useTranslation();
  const { slug: barcode } = useLocalSearchParams();
  const { data: productData, isLoading, error } = useSWR(barcode, fetchProductData);

  // This should never be able to happen -> only if there is a programmatic error in the navigation.
  if (!productData || error || Array.isArray(barcode)) return <ErrorScreen />;

  // TODO: add skeleton for detail page
  if (isLoading) return <Text>Loading ...</Text>;

  const { novaScore, nutriScore, plantScore } = productData.scores ?? {};
  const foo = [novaScore, nutriScore, plantScore];
  return (
    <VStack style={styles.container} isContainerView>
      <VStack gap={8} style={styles.imageContainer}>
        <Image
          source={{ uri: productData.imgUrl }}
          contentFit="contain"
          style={{ width: '100%', height: 350 }}
        />
        <VStack gap={8} style={styles.additionalInformation}>
          <Text style={styles.title}>{productData.productName}</Text>
          {novaScore && (
            <ScoreExplanation
              value={novaScore.value}
              color={novaScore.color}
              title={t('scores.processedGrade.title')}
              explanation={t(getNovaScoreExplanation(novaScore))}
            />
          )}
          {nutriScore && (
            <ScoreExplanation
              value={nutriScore.value}
              color={nutriScore.color ?? ''}
              title={t('scores.nutrition.title')}
              explanation={t(getNutriScoreExplanation(nutriScore))}
            />
          )}
          {plantScore && (
            <ScoreExplanation
              value={plantScore.value}
              color={plantScore.color}
              title={t('scores.plantGrade.title')}
              explanation={t(getPlantScoreExplanation(plantScore))}
            />
          )}
        </VStack>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
  },
  imageContainer: {
    paddingTop: 16,
    width: '90%',
    borderRadius: 16,
    alignItems: 'center',
  },
  additionalInformation: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
