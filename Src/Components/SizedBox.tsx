import {View} from 'react-native';
import React from 'react';

interface SizedBoxProps {
  width?: number | undefined;
  height?: number | undefined;
}

export default function SizedBox({height = 0, width = 0}: SizedBoxProps) {
  return <View style={{height: height, width: width}} />;
}
