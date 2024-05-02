import { StyleSheet, type ViewStyle } from 'react-native';
import { View, Text } from '@/components/atoms/Themed';

export type ScoreDisplayProps = {
  score: string | number;
  color: ViewStyle['backgroundColor'];
  scoreTitle: string;
};

export const ScoreDisplay = ({ score, color, scoreTitle }: ScoreDisplayProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.scoreContainer, { backgroundColor: color }]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 18,
  },
});
