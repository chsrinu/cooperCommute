import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';
import { NormalText } from '../commonComponents';
import images from '../../../images';

class UserProfile extends Component {

  static navigationOptions = {
    header: null
 }
  render() {
     return (
       <ScrollView style={styles.container}>
        <Image style={styles.ImageStyle}
        source = {images.Profile1}>
        </Image>
        <Text style={styles.textStyle}>Saiyyad Mohammad Adil</Text>
        <Text style={styles.textStyle}>Software Engineer</Text>
        <NormalText text={'Address'} text1={'Manapakkam Chennai Tamilnadu -008390'}/>
        <NormalText text={'Contact'} text1={'8526657517'}/>
        <NormalText text={'Alternate Contact'} text1={'9566276880'}/>
        <NormalText text={'User Id'} text1={'chec/sadil'}/>
        <NormalText text={'Email'} text1={'saiyyadmohammad.adil@mrcooper.com'}/>
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