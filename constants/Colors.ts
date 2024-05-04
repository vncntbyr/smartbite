export type ColorType = {
  green: Record<string, string>;
  red: Record<string, string>;
  yellow: Record<string, string>;
  orange: Record<string, string>;
  gray: Record<string, string>;
  blue: Record<string, string>;
  black: Record<string, string>;
  white: Record<string, string>;
};

export const Colors: ColorType = {
  white: {
    '100': '#ffffff',
    '200': '#ffffff',
    '300': '#ffffff',
    '400': '#ffffff',
    '500': '#ffffff',
    '600': '#ffffff',
    '700': '#ffffff',
    '800': '#ffffff',
    '900': '#ffffff',
  },
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
    300: '#ff9495',
    400: '#ff3b58',
    500: '#ff0a32',
    600: '#cc0026',
    700: '#99001b',
    800: '#66000f',
    900: '#330005',
  },
  blue: {
    100: '#f0f8ff',
    200: '#bcccfd',
    300: '#97b3ff',
    400: '#5d7bf1',
    500: '#3b51d3',
    600: '#2b3cad',
    700: '#182375',
    800: '#080c42',
    900: '#020418',
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
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
  black: {
    100: '#f5f5f5',
    200: '#e0e0e0',
    300: '#bdbdbd',
    400: '#9e9e9e',
    500: '#757575',
    600: '#616161',
    700: '#424242',
    800: '#212121',
    900: '#000000',
  },
};

const tintColorLight = Colors.blue[500];
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#FFFFFF',
    headerBackground: '#F2F2F7',
    borderColor: '#E5E5EA',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#FFFFFF',
    background: '#1C1C1E',
    headerBackground: '#000000',
    borderColor: '#2C2C2E',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
