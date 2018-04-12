import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  AsyncStorage,
} from 'react-native';
import { NormalText } from '../commonComponents';
import images from '../../../images';

class UserProfile extends Component {

/*  static navigationOptions = {
    header: null
 }*/
 state = { data: [] };
 async componentWillMount() {
try {
    var value = await AsyncStorage.getItem('empData');
    this.setState({ data: JSON.parse(value) });
    } catch (error) {
 // Error retrieving data
  }
 }

  render() {
     return (
       <ScrollView style={styles.container}>
        <Image style={styles.ImageStyle}
        source = {images.Profile1}>
        </Image>
        <Text style={styles.textStyle}>{this.state.data.empName}</Text>
        <NormalText text={'Address'} text1={this.state.data.empHomeAddr} />
        <NormalText text={'Contact'} text1={this.state.data.empPhone} />
        <NormalText text={'User Id'} text1={this.state.data.empId} />
        <NormalText text={'Email'} text1={this.state.data.empEmail} />
      </ScrollView>
     );
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54C0EB',
    },
  ImageStyle: {
    alignSelf: 'center',
    marginTop: 20,
    height:200,
    width:200,
    borderRadius : 100,
    marginBottom:10
    },
    textStyle: {
      alignSelf : 'center',
      marginBottom: 5
    }
});

export { UserProfile };
