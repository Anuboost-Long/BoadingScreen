import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import Color from '../../Constant/Color';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../SizedBox';

interface SignOutProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignOutModal({visible, setVisible}: SignOutProps) {
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <Modal isVisible={visible} onBackdropPress={closeModal}>
      <View style={GlobalStyle.modalcontent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Logging Out </Text>
        </View>
        <SizedBox height={moderateScale(20)} />
        <Text style={styles.description}>
          Are you sure you want to log out ??
        </Text>
        <SizedBox height={moderateScale(20)} />
        <View style={[GlobalStyle.rowView, styles.buttonContainer]}>
          <TouchableOpacity>
            <Text style={styles.cancel}> Cancel </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirm}> Confirm </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.apolloBlue,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    padding: moderateScale(15),
  },
  headerTitle: {
    fontSize: moderateScale(16),
    color: Color.white,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  description: {
    fontSize: moderateScale(14),
    color: Color.commonText,
    fontWeight: '700',
  },
  confirmButton: {
    backgroundColor: Color.apolloBlue,
    padding: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(15),
  },
  confirm: {
    color: Color.white,
    fontWeight: '700',
    fontSize: moderateScale(14),
  },
  cancel: {
    color: Color.apollo,
    fontWeight: '700',
    fontSize: moderateScale(14),
  },
  buttonContainer: {
    width: '65%',
  },
});
