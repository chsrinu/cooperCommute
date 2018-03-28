import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize } from 'react-native-responsive-dimensions';
import { CardSection, CaptionText } from '../commonComponents';
import images from '../../../images';
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
    <ListText> {data.rqstFrmAddr} </ListText>
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
state={ rejected: false }
  alertBox() {
    Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    { text: 'OK', onPress: () => this.rejectCab() },
  ],
  { cancelable: false }
);
  }
  rejectCab() {
    this.setState({ rejected: true });
    //make a call to reject cab request for data.rqstDt
  }
  getTextViews(data, imgsrc) {
    if (this.state.rejected) {
      return (<ListText style={{ flex: 0.4 }}>Reject request sent </ListText>);
    }
    return (<TempText style={{ flex: 0.4 }} data={data} imgsrc={imgsrc} />);
  }
  render() {
    const { data, rejectImage, imgsrc } = this.props;
    return (
      <CardSection>
        {this.getTextViews(data, imgsrc)}
        <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
          <ListText> {data.rqstDt} </ListText>
          <CaptionText text={data.rqstInTm} />
        </View>
        {!this.state.rejected && <TouchableHighlight onPress={() => this.alertBox()}>
        <Image
          source={rejectImage}
          style={{
            height: responsiveHeight(8),
            width: responsiveWidth(8),
            alignSelf: 'center'
           }}
        />
        </TouchableHighlight>}
      </CardSection>
    );
  }
}

export default ConfirmOrCancelCabListItem;
