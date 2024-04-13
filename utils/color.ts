import { Colors, type ColorType } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export const getCorrectColor = (color: keyof ColorType) => {
  return useColorScheme() === 'light' ? Colors[color]['400'] : Colors[color]['600'];
};
