import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize } from 'react-native-responsive-dimensions';
import { CardSection, CaptionText } from '../commonComponents';
import { ListItemTextSize } from '../../constants';

const ListText = ({ children }) => (
  <Text
  style={{
    fontSize: responsiveFontSize(ListItemTextSize),
    padding: 2,
    flex: 0.4,
    alignSelf: 'center',
    color: 'black'
   }}
  >
  {children}
  </Text>

);
const TempText = ({ data, imgsrc }) => (

  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
    <ListText> {data.empHomeArea} </ListText>
    <Image
      source={imgsrc}
      style={{
        height: responsiveHeight(8),
        width: responsiveWidth(8),
        flex: 0.4,
        alignSelf: 'center'
       }}
    />
    <ListText> {data.rqstToAddr} </ListText>
  </View>
);

class ConfirmOrCancelCabListItem extends Component {

  /*getTextViews(data, imgsrc) {
    if (this.state.rejected) {
      return (<ListText style={{ flex: 0.4 }}>Reject request sent </ListText>);
    }
    return (<TempText style={{ flex: 0.4 }} data={data} imgsrc={imgsrc} />);
  }*/
  alertBox() {
    Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    { text: 'OK', onPress: () => console.log('ok pressed') },
  ],
  { cancelable: false }
);
}
  render() {
    const { data, imgsrc } = this.props;
    return (
      <Swipeout {...swipeSettings}>
      <CardSection>
        <TempText style={{ flex: 0.4 }} data={data} imgsrc={imgsrc} />
        <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
          <ListText> {data.rqstDt} </ListText>
          <CaptionText text={data.rqstInTm} />
        </View>
      </CardSection>
      </Swipeout>
    );
  }
}
const swipeSettings = {
    autoClose: true,
    right: [
      {
        onPress: () => {

        },
        text: 'Cancel',
        type: 'delete'
      }
    ]
};
export default ConfirmOrCancelCabListItem;
