import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { View, Text } from '@/components/Themed';
import { ScoreDisplay } from './ScoreDisplay';

type ProductOverviewProps = {
  imgUrl: string;
  productName: string;
  nutrients: Record<string, number>;
};

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const ProductOverview = ({ imgUrl, productName, nutrients }: ProductOverviewProps) => {
  const { energyKcal, energyKcalUnit } = nutrients;
  return (
    <View style={styles.overviewContainer}>
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
        <ScoreDisplay score={1} scoreTitle="Processed" />
        <ScoreDisplay score={3} scoreTitle="Nutrition" />
        <ScoreDisplay score={5} scoreTitle="Plant Based" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    borderRadius: 16,
    elevation: 1,
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
