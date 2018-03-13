import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-carousel';
import images from '../../images';
import { Button } from './commonComponents';
import { BOOK_CAB, MANAGE_TRIPS, MY_PROFILE } from '../constants';


class ImageCarousal extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#54C0EB' }}>
        <Carousel
        indicatorOffset={10}
        indicatorColor="#FFFFFF"
        delay={3000}
        >
        <View style={styles.containerStyle}>
          <Image source={images.menuBookCab} />
          <Button
            onPress={() => Actions.bookAndManageCabs({ bookingCab: true })}
            style={styles.buttonStyle}
          >{BOOK_CAB}</Button>
        </View>
        <View style={styles.containerStyle}>
          <Image source={images.menuManageTrips} />
          <Button
            style={styles.buttonStyle}
            onPress={() => Actions.bookAndManageCabs({ title: 'Manage Trips' })}
          >{MANAGE_TRIPS}</Button>
        </View>
        <View style={styles.containerStyle}>
          <Image source={images.menuProfile} />
          <Button
            onPress={() => Actions.userProfile()}
            style={styles.buttonStyle}
          >{MY_PROFILE}</Button>
        </View>
        </Carousel>
      </View>
    );
  }
}


const styles = {
  containerStyle: {
     flex: 0.8,
     alignItems: 'center',
     justifyContent: 'center'
  },
  imageStyle: {
     paddingRight: 20,
     paddingLeft: 20,
     paddingTop: 10,
  },
  buttonStyle: {
    flex: 0.2
  }
};
export default ImageCarousal;
