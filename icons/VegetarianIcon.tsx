import { getIconColor } from '@/utils/color';
import * as React from 'react';
import Svg, { Circle, Line, Path, Ellipse, type SvgProps, G } from 'react-native-svg';
// inspired by wishforge.games
export const VegetarianIcon = (props: SvgProps) => (
  <Svg id="Icons" viewBox="-2 -2 36 36" {...props}>
    <G
      fill="none"
      stroke={getIconColor('black')}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      scale={0.9}
      translateX={2}
      translateY={2}
    >
      <Path d="M27.7,9.9C25.1,8.7,21.4,8,17.3,8C9.4,8,3,10.7,3,14c0,2.2,1.4,4.5,4.8,5.5c2.1,0.6,4.4,0.5,6.4-0.2l0,0 c2.2-0.7,4.1-2,5.9-3.4c1.4-1.1,3.2-1.8,5.1-1.8h1.3C29.1,14,29.9,10.9,27.7,9.9z" />
      <Ellipse cx={11.5} cy={14} rx={3.5} ry={2} />
      <Path d="M29,12v5h0c-0.1,1-1,2-2.4,2h-1.3c-1.9,0-3.8,0.7-5.1,1.8c-1.8,1.5-3.7,2.7-5.9,3.4l0,0 c-2.1,0.7-4.3,0.8-6.4,0.2C4.4,23.5,3,21.2,3,19v-5" />
    </G>
    <G stroke="red">
      <Circle cx={16} cy={16} r={16} fill="transparent" strokeWidth={2} />
      <Line x1={5} y1={27} x2={27} y2={5} strokeWidth={3} />
    </G>
  </Svg>
);
