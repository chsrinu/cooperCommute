/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Button, EditText } from './commonComponents';
import images from '../../images';

type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    header:null
}


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.viewStyle}>
        <Text>Cooper Commute</Text>
       </View>
       <View style={styles.viewStyle1}>
       <Text style={styles.textStyle}>Login</Text>
       <EditText placeText={'Enter the username'} text={'Email:'} sEn={false}/>
       <EditText placeText={'Enter the password'} text={'password:'} sEn={true}/>
       <Button  onPress={() => {Actions.main(); Actions.menuScreen()}}/>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#004261',
    },
  ImageStyle: {
    justifyContent: 'flex-start',
    marginTop: 40,
    marginBottom:20
    },
  viewStyle:{
    flex:1,
  },
  viewStyle1:{
    flex:2,
    backgroundColor: '#1b6c92',
    borderRadius:10,
    padding:10,
    marginHorizontal:25,
    marginBottom:25
  },
  textStyle: {
    fontSize: 25,
    alignSelf:'center',
    color:'white'
  }
});
