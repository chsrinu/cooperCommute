import React, { Component } from 'react';
import { View } from 'react-native';
import { List } from '../commonComponents';

class TripToday extends Component {
  confirmationData = [
    {
      key: 1,
      from: 'Guindy',
      to: 'DLF IT park',
      date: '13/15/2018',
      boardingTime: '12:45 PM',
      shiftType: 'shift'
    },
  ];
  render() {
    return (
    <View>
      <List
      listType={'TripToday'}
      data={this.confirmationData}
      />
    </View>
    );
  }
}
export default TripToday;
