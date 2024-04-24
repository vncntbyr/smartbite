import { Colors, type ColorType } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export const getBackgroundColor = (color: keyof ColorType) => {
  return useColorScheme() === 'light' ? Colors[color]['400'] : Colors[color]['600'];
};

export const getShadowColor = (color: keyof ColorType) => {
  return useColorScheme() === 'light' ? Colors[color]['300'] : Colors[color]['400'];
};

export const getIconColor = (color: keyof ColorType) => {
  return useColorScheme() === 'light' ? Colors[color]['900'] : Colors[color]['100'];
};
