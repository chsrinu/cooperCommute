import React from 'react';
import { Text } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const CaptionText = ({ text }) => (
<Text style={styles.textStyle}> {text} </Text>
);
const styles = {
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2)
  }
};

export { CaptionText };
