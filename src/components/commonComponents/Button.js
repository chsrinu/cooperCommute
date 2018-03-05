import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { responsiveFontSize
        } from 'react-native-responsive-dimensions';

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.ButtonStyles} onPress={onPress}>
  <Text style={styles.ButtonTextStyle}>
    {children}
  </Text>
  </TouchableOpacity>
);
const styles = {
  ButtonStyles: {
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 10,
  marginLeft: 5,
  marginRight: 5,
},
ButtonTextStyle: {
  color: '#54C0EB',
  alignSelf: 'center',
  fontSize: responsiveFontSize(3.5),
  fontWeight: '600'
 }
};

export default Button;
