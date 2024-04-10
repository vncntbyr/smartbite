import { View, Text, StyleSheet } from 'react-native';

export type ScoreDisplayProps = {
  score: number;
  scoreTitle: string;
};

export const ScoreDisplay = ({ score, scoreTitle }: ScoreDisplayProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text>{score}</Text>
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
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
