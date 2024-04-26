import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
// made by (inspired by) edent
export const VeganIcon = (props: SvgProps) => (
  <Svg aria-label="Vegetarian" role="img" viewBox="0 0 512 512" {...props}>
    <Circle cx={256} cy={256} r={220} stroke="#0f0" fill="transparent" strokeWidth={25} />
    <Path fill="#0f0" d="m140 120h44l72 225 72-225h44l-90 265h-52z" />
  </Svg>
);
