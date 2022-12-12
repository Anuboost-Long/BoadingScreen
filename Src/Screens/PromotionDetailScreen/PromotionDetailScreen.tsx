import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import GlobalHeader from '../../Components/GlobalHeader';
// import SizedBox from '../../Components/SizedBox';
import {IMAGE_ASSETS} from '../../Assets/Images';
import {DEVICE} from '../../Utils/DeviceCalibration';
import {moderateScale} from 'react-native-size-matters';

export default function PromotionDetailScreen() {
  return (
    <View style={styles.container}>
      <GlobalHeader />
      <Image
        source={IMAGE_ASSETS.Promotion}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>50% off the second delivery</Text>
        </View>
        {/* <SizedBox height={moderateScale(20)} /> */}
        <View style={styles.titleContainer}>
          <Text style={styles.infoText}>
            {'    '}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>
        </View>
        {/* <SizedBox height={moderateScale(20)} /> */}
        <View style={[styles.titleContainer, styles.rowView]}>
          <Text style={styles.title}>Offer Ends In:</Text>
          <Text style={styles.title}>31,December,2022</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  image: {
    height: DEVICE.SCREEN_HEIGHT / 2.5,
    width: DEVICE.SCREEN_WIDTH,
  },
  infoContainer: {
    justifyContent: 'space-around',
    elevation: 5,
    position: 'absolute',
    top: DEVICE.SCREEN_HEIGHT / 2.5,
    backgroundColor: Color.white,
    height: DEVICE.SCREEN_HEIGHT - DEVICE.SCREEN_HEIGHT / 2.3,
    width: DEVICE.SCREEN_WIDTH,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    // paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  title: {
    textAlign: 'center',
    color: Color.white,
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  infoText: {
    color: Color.white,
    fontSize: moderateScale(12),
    fontWeight: '700',
    textAlign: 'justify',
  },
  titleContainer: {
    borderRadius: moderateScale(20),
    backgroundColor: Color.disabled,
    padding: moderateScale(10),
    width: '95%',
    alignSelf: 'center',
    maxHeight: DEVICE.SCREEN_HEIGHT / 3,
  },
  rowView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
