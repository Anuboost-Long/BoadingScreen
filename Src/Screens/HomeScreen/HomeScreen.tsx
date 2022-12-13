import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PromotionCarousel from '../../Components/PromotionCarousel';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../Components/SizedBox';
import OptionHolder from '../../Components/OptionHolder';
import {IMAGE_ASSETS} from '../../Assets/Images';
import {DEVICE} from '../../Utils/DeviceCalibration';
import GlobalHeader from '../../Components/GlobalHeader';
import Color from '../../Constant/Color';
import BannerModal from '../../Components/Modals/BannerModal';
import SignOutModal from '../../Components/Modals/SignOutModal';

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  const [signOutShow, setSignOutShow] = useState(false);
  return (
    <View style={styles.container}>
      <BannerModal visible={visible} setVisible={setVisible} />
      <SignOutModal visible={signOutShow} setVisible={setSignOutShow} />
      <GlobalHeader />
      <SizedBox height={moderateScale(30)} />
      <PromotionCarousel />
      <SizedBox height={moderateScale(30)} />
      <Text style={styles.titleText}> Services</Text>
      <SizedBox height={moderateScale(10)} />
      <OptionHolder
        onPress={() => setVisible(true)}
        image={IMAGE_ASSETS.Express}
        height={DEVICE.SCREEN_WIDTH / 2}
        width={DEVICE.SCREEN_WIDTH / 1.09}
        title="Express"
      />
      <SizedBox height={moderateScale(30)} />
      <View style={styles.rowView}>
        <OptionHolder
          onPress={() => setSignOutShow(true)}
          image={IMAGE_ASSETS.SameDay}
          height={DEVICE.SCREEN_WIDTH / 2}
          width={DEVICE.SCREEN_WIDTH / 2.2}
          title="Same Day"
        />
        <OptionHolder
          image={IMAGE_ASSETS.NextDay}
          height={DEVICE.SCREEN_WIDTH / 2}
          width={DEVICE.SCREEN_WIDTH / 2.2}
          title="Next Day"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    flex: 1,
    backgroundColor: 'white',
  },
  rowView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: Color.commonText,
    fontWeight: '700',
    fontSize: moderateScale(18),
  },
});
