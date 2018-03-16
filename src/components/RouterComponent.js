import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import MainMenu from './MainMenu';
import { BOOK_CAB, MY_PROFILE, CONFIRM_BOOKING } from '../constants';
import { BookAndManageCabs, UserProfile } from './submenu';
import BookingConfirmation from './BookingConfirmation';
import Splash from './Splash';
import Login from './Login';
export default class RouterComponent extends Component {


render() {
  const { sceneStyles, navigationBarStyle, titleStyle } = styles;

  return (

  <Router>
    <Scene
    key='splash'
    hideNavBar
    component={Splash}/>
    <Scene 
    key='Login'
    hideNavBar
    component={Login}/>
    <Scene
      key='main'
      titleStyle={titleStyle}
      barButtonIconStyle={{ tintColor: 'white' }}
      navigationBarStyle={navigationBarStyle}
    >

      <Scene
        hideNavBar
        key='menuScreen'
        component={MainMenu}
        initial
      />
      <Scene
        key='bookAndManageCabs'
        sceneStyle={sceneStyles}
        hideNavBar={false}
        component={BookAndManageCabs}
        title={BOOK_CAB}
      />
      <Scene
          sceneStyle={sceneStyles}
          hideNavBar={false}
          key='userProfile'
          component={UserProfile}
          title={MY_PROFILE}
      />
      <Scene
          hideNavBar={false}
          sceneStyle={sceneStyles}
          key='bookingConfirmation'
          component={BookingConfirmation}
          title={CONFIRM_BOOKING}
      />
    </Scene>
    </Router>
  );
}
}
const styles = {
  sceneStyles: {
    paddingTop: responsiveHeight(8)
  },
  navigationBarStyle: {
    backgroundColor: '#54C0EB',
  },
  titleStyle: {
    color: 'white',
  }
};
