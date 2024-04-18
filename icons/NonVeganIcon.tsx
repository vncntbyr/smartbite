import * as React from 'react';
import Svg, { Circle, Line, Path, SvgProps } from 'react-native-svg';
// made by (inspired by) edent
export const NonVeganIcon = (props: SvgProps) => (
  <Svg aria-label="Vegetarian" role="img" viewBox="0 0 512 512" {...props}>
    <Path fill="#0f0" d="m140 120h44l72 225 72-225h44l-90 265h-52z" />
    <Circle cx={256} cy={256} r={220} stroke="red" fill="transparent" strokeWidth={30} />
    <Line x1={110} y1={420} x2={420} y2={110} strokeWidth={30} stroke="red" />
  </Svg>
);
