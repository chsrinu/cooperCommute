import React from 'react';
import { View } from 'react-native';
import { TextHeading, CaptionText } from '../commonComponents';


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
export { DateAndDay };
