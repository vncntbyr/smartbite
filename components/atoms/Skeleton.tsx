import React, { useState, useEffect } from 'react';
import { Animated, ViewStyle } from 'react-native';

type SkeletonProps = {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  flex?: ViewStyle['flex'];
  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginLeft?: ViewStyle['marginLeft'];
  marginRight?: ViewStyle['marginRight'];
};

const Skeleton = ({
  width,
  height,
  flex,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: SkeletonProps) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const interpolatedValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(200, 200, 200, 0.25)', 'rgba(200, 200, 200, 0.15)'],
  });

  return (
    <Animated.View
      style={{
        borderRadius: 8,
        backgroundColor: interpolatedValue,
        width: width || '100%',
        height: height || '100%',
        flex: flex || 1,
        margin: margin || 0,
        marginTop: marginTop || 0,
        marginBottom: marginBottom || 0,
        marginLeft: marginLeft || 0,
        marginRight: marginRight || 0,
      }}
    />
  );
};

export default Skeleton;
