import React from 'react';
import { Text } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const TextHeading = ({ label, size = 4 }) => (
<Text style={[styles.textStyle, { fontSize: responsiveFontSize(size) }]}> {label} </Text>
);
export default TextHeading;

const styles = {
  textStyle: {
    padding: 10,
    color: '#54C0EB',
    alignSelf: 'center',
    fontWeight: '600',
   }
};
