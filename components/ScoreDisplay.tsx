import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { getBackgroundColor } from '@/utils/color';

export type ScoreDisplayProps = {
  score: number;
  scoreTitle: string;
};

export const ScoreDisplay = ({ score, scoreTitle }: ScoreDisplayProps) => {
  const calculateBackgroundColor = () => {
    if (score === 0) return getBackgroundColor('green');
    if (score <= 2) return getBackgroundColor('yellow');
    if (score <= 3) return getBackgroundColor('orange');
    return getBackgroundColor('red');
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
