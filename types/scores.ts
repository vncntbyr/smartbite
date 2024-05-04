import type { ColorType } from '@/constants/Colors';
import type { ViewStyle } from 'react-native';

export type Scores = {
  novaScore: NovaScore;
  negativePoints: number;
  positivePoints: number;
  nutriScore: NutriScore;
  plantScore: PlantScore;
};

export type NovaScore = {
  value: '1' | '2' | '3' | '4';
  color: keyof ColorType;
};

export type NutriScore = {
  value: 'A' | 'B' | 'C' | 'D' | 'E';
  color: ViewStyle['backgroundColor'];
};

export type PlantScore = {
  value: '1' | '2' | '3' | '4';
  color: keyof ColorType;
};
