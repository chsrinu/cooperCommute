import React from 'react';
import { responsiveHeight,
          responsiveWidth,
        } from 'react-native-responsive-dimensions';
import { Alert, TouchableOpacity } from 'react-native';

const CustomAlert = ({ children, title, message, functionOk }) => {
  const showAlert = () => {
    Alert.alert(
        title,
        message,
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: functionOk },
        ],
        { cancelable: false }
      );
    };
    return (
      <TouchableOpacity onPress={showAlert} style={Styles.ButtonStyles}>
      {children}
      </TouchableOpacity>
    );
  };
  const Styles = {
    ButtonStyles: {
      width: responsiveWidth(8),
      height: responsiveHeight(8),
      position: 'absolute',
      right: 0
  },
};
export { CustomAlert };
