import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageCarousal from './ImageCarousal';
import { Header } from './commonComponents';

class MainMenu extends Component {
  logOut() {
    Actions.Login();
  }
render() {
  return (
   <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <Header
        headerText='COOPERCOMMUTE'
        onPress={this.logOut}
        />
      </View>
      <View style={{ flex: 0.9 }}>
        <ImageCarousal />

      </View>
   </View>
 );
}
}
export default MainMenu;
