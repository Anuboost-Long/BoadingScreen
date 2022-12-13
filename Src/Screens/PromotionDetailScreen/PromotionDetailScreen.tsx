import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import GlobalHeader from '../../Components/GlobalHeader';
import SizedBox from '../../Components/SizedBox';
import {IMAGE_ASSETS} from '../../Assets/Images';
import {DEVICE} from '../../Utils/DeviceCalibration';
import {moderateScale} from 'react-native-size-matters';
import {GlobalStyle} from '../../Utils/GlobalStyle';

const containerHeight = DEVICE.SCREEN_HEIGHT - DEVICE.SCREEN_HEIGHT / 2.5;

export default function PromotionDetailScreen() {
  return (
    <View style={styles.container}>
      <GlobalHeader />
      <View>
        <Image
          source={IMAGE_ASSETS.Promotion}
          style={styles.BackgroundImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Image
            source={IMAGE_ASSETS.Promotion}
            style={styles.image}
            resizeMode="cover"
          />
          <SizedBox height={moderateScale(20)} />
          <View style={styles.infoContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.title}>
                Free Delivery for member Card owner
              </Text>
            </View>
            {/* <SizedBox height={moderateScale(20)} /> */}
            <View style={styles.rightContainer}>
              <Text style={styles.infoText}>
                {'\t'}Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </Text>
            </View>
            {/* <SizedBox height={moderateScale(20)} /> */}
            <View style={GlobalStyle.rowView}>
              <View style={styles.leftHalfContainer}>
                <Text style={styles.Subtitle}>Offer Ends In: </Text>
              </View>
              <View style={styles.rightHalfContainer}>
                <Text style={styles.Subtitle}>31st Dec 2022</Text>
              </View>
            </View>
          </View>
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
  BackgroundImage: {
    height: DEVICE.SCREEN_HEIGHT,
    width: DEVICE.SCREEN_WIDTH,
  },
  overlay: {
    height: DEVICE.SCREEN_HEIGHT,
    width: DEVICE.SCREEN_WIDTH,
    position: 'absolute',
    backgroundColor: Color.black,
    opacity: 0.6,
  },
  content: {
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
    color: Color.white,
    fontSize: moderateScale(16),
    letterSpacing: 0.8,
    fontWeight: 'bold',
  },
  infoText: {
    color: Color.white,
    fontSize: moderateScale(12),
    fontWeight: '700',
    textAlign: 'justify',
  },
  leftContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Color.disabled,
    padding: moderateScale(10),
    width: '90%',
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  rightContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Color.disabled,
    padding: moderateScale(10),
    width: '90%',
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
  },
  leftHalfContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Color.disabled,
    padding: moderateScale(10),
    width: '45%',
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  rightHalfContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Color.disabled,
    padding: moderateScale(10),
    width: '45%',
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
  },
  Subtitle: {
    textAlign: 'center',
    color: Color.white,
    fontSize: moderateScale(14),
    letterSpacing: 0.8,
    fontWeight: 'bold',
  },
  infoContainer: {
    justifyContent: 'space-around',
    elevation: 5,
    position: 'absolute',
    top: containerHeight / 2,
    height: containerHeight,
    width: DEVICE.SCREEN_WIDTH,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    backgroundColor: Color.white,
    paddingVertical: moderateScale(10),
  },
});
