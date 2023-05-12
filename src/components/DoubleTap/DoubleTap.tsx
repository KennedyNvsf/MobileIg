import React, {ReactNode} from 'react';
import { View, Text, Pressable } from 'react-native';

interface IDoubleTap {
    onDoubleTap?: () => void;
    children: ReactNode;
}

const DoubleTap = ({onDoubleTap = () => {}, children}: IDoubleTap) => {

    //double tap functionality
  let lastTap = 0
  const postDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      onDoubleTap()
    } else {
      lastTap = now;
    }
  }
  

  return (
    <Pressable onPress={onDoubleTap}>
      {children}
    </Pressable>
  )
}

export default DoubleTap