import { Text, View, Image } from 'react-native';
import React from 'react';
import { responsiveHeight,
          responsiveWidth,
          responsiveFontSize
        } from 'react-native-responsive-dimensions';
import images from '../../../images';
import { CustomAlert } from '../commonComponents';

const Header = (props) =>
(
    <View style={Styles.viewStyle}>
     <Text style={Styles.textStyle}> {props.headerText}</Text>
     <CustomAlert
     title={'Logout'}
     message={'Are you sure you want to Logout'}
     functionOk={props.onPress}
     ><Image source={images.iconLogOut} style={Styles.ButtonStyles} />
     </CustomAlert>
    </View>
);

const Styles = {
  textStyle: {
    fontSize: responsiveFontSize(4),
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  ButtonStyles: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
    position: 'absolute',
    right: 0
},

  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#54C0EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: responsiveHeight(30) },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
