/**=
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
//import Spinner from 'react-native-spinkit';
import { Actions } from 'react-native-router-flux';
import images from '../../images';

type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        header:null
    }
    componentWillMount (){
        setTimeout (() =>{
            Actions.Login()
        },3000);
    }
    componentDidMount
    render() {
    return (
      <View style={styles.container}>
       <Image source = {images.MrCooperLogo}>
       </Image>
       <ActivityIndicator size='large' color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
