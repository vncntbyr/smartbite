import { Colors, type ColorType } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export const getBackgroundColor = (color: keyof ColorType) => {
  if (!color) return '#ffffff';
  return useColorScheme() === 'light' ? Colors[color]['400'] : Colors[color]['600'];
};

export const getShadowColor = (color: keyof ColorType) => {
  return useColorScheme() === 'light' ? Colors[color]['800'] : Colors[color]['300'];
};

export const getShadowBorderColor = (color: keyof ColorType) => {
  // the 33 is the alpha value in hex which translates to 20% opacity (same as shadowOpacity in ShadowView.tsx) see: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
  return `${getShadowColor(color)}33`;
};

export const getIconColor = (color: keyof ColorType) => {
  return useColorScheme() === 'light' ? Colors[color]['900'] : Colors[color]['100'];
};

export const getLinkColor = () => {
  return useColorScheme() === 'light' ? Colors['blue']['600'] : Colors['blue']['400'];
};
