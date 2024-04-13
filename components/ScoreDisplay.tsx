import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { getCorrectColor } from '@/utils/color';

export type ScoreDisplayProps = {
  score: number;
  scoreTitle: string;
};

export const ScoreDisplay = ({ score, scoreTitle }: ScoreDisplayProps) => {
  const calculateBackgroundColor = () => {
    if (score === 0) return getCorrectColor('green');
    if (score <= 2) return getCorrectColor('yellow');
    if (score <= 3) return getCorrectColor('orange');
    return getCorrectColor('red');
  };
  return (
    <View style={styles.container}>
      <View style={[styles.scoreContainer, { backgroundColor: calculateBackgroundColor() }]}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <Text>{scoreTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  scoreContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 18,
  },
});
