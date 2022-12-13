import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DEVICE} from '../Utils/DeviceCalibration';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Constant/Color';

interface OptionProps {
  image?: any;
  title: string | undefined;
  height?: string | number | undefined;
  width?: string | number | undefined;
  onPress?: any;
}

export default function OptionHolder({
  image,
  title,
  width = DEVICE.SCREEN_WIDTH / 1,
  height = DEVICE.SCREEN_WIDTH / 2,
  onPress,
}: OptionProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.optionHolder,
        {width: width, height: height, borderRadius: moderateScale(10)},
      ]}>
      <View style={styles.opacityOverlay} />
      <View style={styles.titleHolder}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
  },
  titleText: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: moderateScale(25),
  },
  titleHolder: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  opacityOverlay: {
    backgroundColor: Color.black,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.3,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  optionHolder: {
    alignSelf: 'center',
  },
});
