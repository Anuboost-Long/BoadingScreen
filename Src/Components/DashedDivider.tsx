import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DEVICE} from '../Utils/DeviceCalibration';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Constant/Color';

export default function DashedDivider() {
  const loop = DEVICE.SCREEN_WIDTH / 10;
  const arr = Array.from({length: loop}, (_, i) => i + 1);
  console.log(arr);
  return (
    <View style={styles.rowView}>
      {arr.map(() => {
        return <View style={styles.dashed} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dashed: {
    width: moderateScale(10),
    marginRight: moderateScale(5),
    height: moderateScale(1),
    backgroundColor: Color.disabled,
  },
});
