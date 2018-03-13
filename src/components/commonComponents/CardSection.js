import React from 'react';
import { View } from 'react-native';
import { themeColor } from '../../constants';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);
const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: themeColor
  }
};
export { CardSection };
