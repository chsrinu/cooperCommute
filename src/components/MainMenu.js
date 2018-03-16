import React from 'react';
import { View, Alert } from 'react-native';
import ImageCarousal from './ImageCarousal';
import { Header } from './commonComponents';

function alertBox() {
  Alert.alert(
'Logout',
'Are you sure you want to Logout',
[
  { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
  { text: 'OK', onPress: () => this.setState({ rejected: true }) },
],
{ cancelable: false }
);
}

 const MainMenu = () => (
   <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <Header
        headerText='COOPERCOMMUTE'
        onPress={alertBox}
        />
      </View>
      <View style={{ flex: 0.9 }}>
        <ImageCarousal />

      </View>
   </View>
 );

export default MainMenu;
