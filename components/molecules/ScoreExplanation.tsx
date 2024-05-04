import { StyleSheet, type ColorValue } from 'react-native';
import { HStack } from '../atoms/HStack';
import { View, Text } from '../atoms/Themed';
import { ScoreDisplay } from './ScoreDisplay';

type ScoreExplanationProps = {
  value: string | number;
  color: string | ColorValue;
  title: string;
  explanation: string;
};

export const ScoreExplanation = ({ value, color, title, explanation }: ScoreExplanationProps) => {
  return (
    <HStack style={styles.container}>
      <ScoreDisplay score={value} color={color} scoreTitle={title} isSquare />
      <View style={styles.textContainer}>
        <Text>{explanation}</Text>
      </View>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'space-between', width: '100%' },
  textContainer: { width: '70%' },
});
