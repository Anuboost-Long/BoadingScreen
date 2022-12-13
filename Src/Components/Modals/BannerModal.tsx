import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Color from '../../Constant/Color';
import {moderateScale} from 'react-native-size-matters';
import {IMAGE_ASSETS} from '../../Assets/Images';
import {DEVICE} from '../../Utils/DeviceCalibration';
import SizedBox from '../SizedBox';
import {GlobalStyle} from '../../Utils/GlobalStyle';

interface BannerModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BannerModal({visible, setVisible}: BannerModalProps) {
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <Modal
      animationIn="pulse"
      animationOut="pulse"
      isVisible={visible}
      backdropOpacity={0.6}
      onBackdropPress={closeModal}>
      <TouchableOpacity style={GlobalStyle.modalcontent} activeOpacity={0.8}>
        <Image
          source={IMAGE_ASSETS.Promotion}
          style={styles.image}
          resizeMode="contain"
        />
        <SizedBox height={moderateScale(10)} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>20% Off On Any Delivery</Text>
        </View>
        <SizedBox height={moderateScale(10)} />
        <Text style={styles.description}>
          A one-hit wonder is any entity that achieves mainstream popularity,
          often for only one piece of work, and becomes known among the general
          public solely for that momentary success. The term is most commonly
          used in regard to music performers with only one hit single that
          overshadows their other work
        </Text>
        <SizedBox height={moderateScale(10)} />
        <View style={[GlobalStyle.alignItemEnd, styles.LimitContainer]}>
          <Text style={styles.limitText}>
            Offer Ends In : 31 - December - 2022
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: DEVICE.SCREEN_WIDTH / 2,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(14),
    color: Color.white,
    letterSpacing: 0.6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleContainer: {
    backgroundColor: Color.apolloBlue,
    alignSelf: 'center',
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
  },
  description: {
    color: Color.commonText,
    textAlign: 'justify',
    width: '90%',
  },
  limitText: {
    color: Color.apolloBlue,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  LimitContainer: {width: '100%', paddingHorizontal: moderateScale(10)},
});
