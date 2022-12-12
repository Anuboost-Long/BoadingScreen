import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {IMAGE_ASSETS} from '../Assets/Images';
import {DEVICE} from '../Utils/DeviceCalibration';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Constant/Color';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const fakeData = [
  {
    name: 'Free On Deliver Number 2',
    key: '1',
    description:
      'When you deliver once the second time is free with in the day',
    limit: '31-dec',
    image: IMAGE_ASSETS.Express,
  },
  {
    name: '50% OFF',
    key: '2',
    description: 'Every Delivery price is 50% off Today',
    limit: '31-dec',
    image: IMAGE_ASSETS.Promotion,
  },
];

export default function PromotionCarousel() {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.promotionHolder}>
        <Image source={item.image} resizeMode="cover" style={styles.Image} />
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <View style={{paddingHorizontal: moderateScale(10)}}>
        <Carousel
          loop
          style={{alignSelf: 'center', borderRadius: moderateScale(10)}}
          width={DEVICE.SCREEN_WIDTH}
          height={DEVICE.SCREEN_WIDTH / 2}
          data={fakeData}
          scrollAnimationDuration={600}
          pagingEnabled={true}
          renderItem={renderItem}
          autoPlay
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  promotionHolder: {
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(6),
  },
  bannerText: {
    color: Color.commonText,
  },
  Image: {
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(240,240,240, 0.8)',
    width: '100%',
    height: '100%',
  },
});
