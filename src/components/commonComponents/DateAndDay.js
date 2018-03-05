import React from 'react';
import { View } from 'react-native';
import TextHeading from './TextHeading';
import CaptionText from './CaptionText';

const DateAndDay = (props) => (
  <View style={styles.containerStyle}>
    <TextHeading label={props.date} size={2.1} />
    <CaptionText text={props.day} />
  </View>
);

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};
export default DateAndDay;
