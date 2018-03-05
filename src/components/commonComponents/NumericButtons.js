import React from 'react';
import { Text, View } from 'react-native';
import { responsiveFontSize
        } from 'react-native-responsive-dimensions';

const NumericButtons = ({ children }) => (
<View style={styles.containerStyles}>
  <Text style={styles.TextStyle}>
    {children}
  </Text>
</View>
);
const styles = {
  TextStyle: {
    fontFamily: 'digital-7',
    fontSize: responsiveFontSize(15),
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'black'
  },
  containerStyles: {
  backgroundColor: '#fff',
  borderRadius: 1,
  padding: 1,
  marginLeft: 1,
  marginRight: 1,
  flex: 0.5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
},
};
export default NumericButtons;
