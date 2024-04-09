import { useEffect, useState } from 'react';
import {
  type GestureStateChangeEvent,
  type TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

type FocusSquare = {
  visible: boolean;
  x: number;
  y: number;
};

export const useAutofocus = (yThreshold: number) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [focusSquare, setFocusSquare] = useState<FocusSquare>({ visible: false, x: 0, y: 0 });

  useEffect(() => {
    if (isRefreshing) {
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  const onTap = (event: GestureStateChangeEvent<TapGestureHandlerEventPayload>): void => {
    const { x, y } = event;
    // Don't autofocus if the tap is too close to the bottom of the screen due to conflict with flashlight.
    if (y > yThreshold) return;

    setIsRefreshing(true);
    setFocusSquare({ visible: true, x, y });

    // Hide the square after 400 millliseconds.
    setTimeout(() => {
      setFocusSquare((prevState) => ({ ...prevState, visible: false }));
    }, 400);
  };

  return { isRefreshing, focusSquare, onTap };
};
