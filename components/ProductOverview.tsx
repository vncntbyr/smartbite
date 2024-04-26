import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { View, Text } from '@/components/Themed';
import { ScoreDisplay } from './ScoreDisplay';
import { useTranslation } from '@/hooks/useTranslation';
import { ShadowView } from './ShadowView';

type ProductOverviewProps = {
  imgUrl: string;
  productName: string;
  nutrients: Record<string, number>;
  nutriScore?: number;
  novaScore?: number;
  plantScore?: number;
};

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

// TODO: Images are not displayed well at the moment (bottles are cut off) -> think of improvement
// TODO: Sometimes there is no nutrition score data -> handle this case
// TODO: kcals are also not always present -> handle this case
export const ProductOverview = ({
  imgUrl,
  productName,
  nutrients,
  nutriScore,
  novaScore,
  plantScore,
}: ProductOverviewProps) => {
  const t = useTranslation();
  const { energyKcal, energyKcalUnit } = nutrients;
  return (
    <ShadowView style={styles.overviewContainer}>
      <View style={styles.imageTitleContainer}>
        <Image
          style={styles.image}
          source={imgUrl}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{productName}</Text>
          <Text>
            {energyKcal} {energyKcalUnit} / 100g
          </Text>
        </View>
      </View>
      <View style={styles.scoreContainer}>
        {typeof novaScore === 'number' && novaScore >= 0 && (
          <ScoreDisplay score={novaScore} scoreTitle={t('scores.processedGrade')} />
        )}
        {typeof nutriScore === 'number' && nutriScore >= 0 && (
          <ScoreDisplay score={nutriScore} scoreTitle={t('scores.nutrition')} />
        )}
        {typeof plantScore === 'number' && plantScore >= 0 && (
          <ScoreDisplay score={plantScore} scoreTitle={t('scores.plantGrade')} />
        )}
      </View>
    </ShadowView>
  );
};

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
    width: '90%',
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    minWidth: 96,
    maxWidth: 96,
    minHeight: 96,
    maxHeight: 96,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 94,
    paddingLeft: 32,
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flexDirection: 'row',
  },
});
