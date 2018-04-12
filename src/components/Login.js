/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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
import { Actions } from 'react-native-router-flux';
import { Button, EditText, Spinner } from './commonComponents';
import images from '../../images';
import * as actions from '../actions';

type Props = {};
class Login extends Component<Props> {

  static navigationOptions = {
    header: null
}
state = { loginSuccess: false, spinnerVisibility: false }

/*loginSuccess(data) {
  this.props.loginSuccess(data);
  Actions.main();
  Actions.menuScreen();
  this.setState({ spinnerVisibility: false });
}*/

getView() {
if (this.state.spinnerVisibility) {
  return (<Spinner size='large' />);
}
return (<Button
onPress={() => this.makePostCall()}
>Login</Button>);
}
makePostCall() {
  this.setState({ spinnerVisibility: true });
  setTimeout(function(){
  axios.post('http://10.79.8.122:8080/profile', { empId: 350629 })
  .then(response => this.props.loginSuccess(response.data));
  Actions.main(); Actions.menuScreen();
}, 5000);
}
 render() {
    return (
    <View style={styles.container}>
      <View style={{ flex: 0.8, marginHorizontal: 25, marginTop: 20 }} >
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
          <Image style={{ width: responsiveWidth(65), height: responsiveHeight(8) }} source={images.cooper} />
          <Image style={{ width: responsiveWidth(25), height: responsiveHeight(8) }} source={images.car} />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ marginLeft: responsiveWidth(10), width: responsiveWidth(80), height: responsiveHeight(8) }} source={images.commute} />
        </View>
      </View>
       <View style={styles.viewStyle1}>
       <Text style={styles.textStyle}>Login</Text>
       <EditText placeText={'Enter the username'} text={'Email:'} />
       <EditText placeText={'Enter the password'} text={'Password:'} sEn />
       <View style={{ marginTop: 20 }}>
       {this.getView()}
       </View>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#004261',
    },
  viewStyle1: {
    flex: 2.2,
    backgroundColor: '#1b6c92',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 25,
    marginBottom: 25
  },
  textStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'white'
  },

});
export default connect(null, actions)(Login);
