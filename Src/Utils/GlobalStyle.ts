import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Constant/Color';

export const GlobalStyle = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  alignItemStart: {
    alignItems: 'flex-start',
  },
  alignItemEnd: {
    alignItems: 'flex-end',
  },
  roundLeft: {
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  roundRight: {
    borderTopRightRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
  modalcontent: {
    backgroundColor: Color.white,
    borderRadius: moderateScale(20),
    alignItems: 'center',
    paddingBottom: moderateScale(10),
  },
});
