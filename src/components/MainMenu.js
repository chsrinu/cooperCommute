import React from 'react';
import { View } from 'react-native';
import ImageCarousal from './ImageCarousal';
import Header from './commonComponents/Header';


 const MainMenu = () => (
   <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <Header headerText='COOPERCOMMUTE' />
      </View>
      <View style={{ flex: 0.9 }}>
        <ImageCarousal />

      </View>
   </View>
 );

export default MainMenu;
