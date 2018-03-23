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
import { responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Button, EditText } from './commonComponents';
import images from '../../images';
import CheckBox from 'react-native-checkbox'

type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    header:null
}

 render() {
    return (
    <View style={styles.container}>
      <View style={{flex:0.8, marginHorizontal: 25, marginTop: 20}}>
        <View style={{flexDirection: 'row', paddingBottom:20}}>
          <Image  style={{width: responsiveWidth(65),height: responsiveHeight(8)}} source={images.cooper} />
          <Image  style={{width: responsiveWidth(25),height: responsiveHeight(8)}} source={images.car}/>  
        </View>
        <View style={{ justifyContent:'center'}}>
          <Image style={{marginLeft: responsiveWidth(10),width: responsiveWidth(80),height: responsiveHeight(8)}} source={images.commute}/>
        </View>
      </View>
       <View style={styles.viewStyle1}>
       <Text style={styles.textStyle}>Login</Text>
       <EditText placeText={'Enter the username'} text={'Email:'} sEn={false}/>
       <EditText placeText={'Enter the password'} text={'Password:'} sEn={true}/>
       <CheckBox 
        label = 'Remember Me'
        style = {{marginTop:10}}/>
       <Button  onPress={() => {Actions.main(); Actions.menuScreen()}} style={{marginTop:20}} children={'Login'}/>
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
  viewStyle1:{
    flex:2.2,
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
  },

});
