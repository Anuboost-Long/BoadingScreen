import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import {moderateScale} from 'react-native-size-matters';
import DashedDivider from '../../Components/DashedDivider';

export default function Testing() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the test of dashed divider</Text>
      <DashedDivider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  text: {
    marginTop: moderateScale(10),
    color: Color.commonText,
    textAlign: 'center',
    marginBottom: moderateScale(10),
  },
});
