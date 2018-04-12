import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size = 'large', color = '#00b4d2' }) => (
  <View style={Styles.containerStyle}>
    <ActivityIndicator size={size} color={color} />
  </View>
);
const Styles = {
  containerStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  }
};
export { Spinner };
