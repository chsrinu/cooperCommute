import { Text, View, Image } from 'react-native';
import React from 'react';
import { responsiveHeight,
          responsiveWidth,
          responsiveFontSize
        } from 'react-native-responsive-dimensions';
import images from '../../../images';


const Header = (props) =>
(
    <View style={Styles.viewStyle}>
     <Text style={Styles.textStyle}> {props.headerText}</Text>
     <Image source={images.iconLogOut} style={Styles.ImageStyle} />
    </View>
);

const Styles = {
  textStyle: {
    fontSize: responsiveFontSize(4),
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  ImageStyle: {
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
