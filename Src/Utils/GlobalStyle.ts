import {StyleSheet} from 'react-native';
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
});
