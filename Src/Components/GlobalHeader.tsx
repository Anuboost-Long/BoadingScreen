import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DEVICE} from '../Utils/DeviceCalibration';

export default function GlobalHeader() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#1683bf',
      }}>
      <View style={[styles.rowView, {width: DEVICE.SCREEN_WIDTH / 1.7}]}>
        <Text style={styles.icon}> {'<'} </Text>
        <Text style={styles.headerText}> Promotions </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
