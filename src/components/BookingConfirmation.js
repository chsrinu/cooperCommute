import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, List } from './commonComponents';
import images from '../../images';

export default class BookingConfirmation extends Component {
  confirmationData = [
    {
      key: 1,
      from: 'DLF IT PARK',
      to: 'Pallavaram',
      date: '13/15/2018',
      boardingTime: '12:45 PM'
    },
  ];
  render() {
    var imgsrc = this.props.shiftType === 'adhoc' ? images.iconTo : images.iconToandFro;
    return (
      <View style={{ flex: 1 }}>
        <List
        listType={'cabConfirmation'}
        data={this.confirmationData}
        imgsrc={imgsrc}
        />
        <Button
        onPress={() => Actions.menuScreen()}
        > Book </Button>
      </View>
    );
  }
}
