import { useColorScheme } from 'react-native';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export type ColorType = {
  green: Record<string, string>;
  red: Record<string, string>;
  yellow: Record<string, string>;
  orange: Record<string, string>;
  gray: Record<string, string>;
};

export const Colors: ColorType = {
  green: {
    '100': '#ebffee',
    '200': '#aedbb6',
    '300': '#7ccf8d',
    '400': '#00a245',
    '500': '#007f0c',
    '600': '#006500',
    '700': '#004100',
    '800': '#002100',
    '900': '#000a00',
  },
  red: {
    100: '#ffeaeb',
    200: '#ff9fa6',
    300: '#ff6d7f',
    400: '#ff3b58',
    500: '#ff0a32',
    600: '#cc0026',
    700: '#99001b',
    800: '#66000f',
    900: '#330005',
  },
  yellow: {
    100: '#fff9e5',
    200: '#ffef99',
    300: '#ffe066',
    400: '#ffd633',
    500: '#ffcc00',
    600: '#ccaa00',
    700: '#997700',
    800: '#664400',
    900: '#332200',
  },
  orange: {
    100: '#fff5eb',
    200: '#ffcc99',
    300: '#ffaa66',
    400: '#ff8833',
    500: '#ff6600',
    600: '#cc5500',
    700: '#994400',
    800: '#662200',
    900: '#331100',
  },
  gray: {
    100: '#f2f2f2',
    200: '#d9d9d9',
    300: '#bfbfbf',
    400: '#a6a6a6',
    500: '#8c8c8c',
    600: '#737373',
    700: '#595959',
    800: '#404040',
    900: '#262626',
  },
};

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
