import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List } from '../commonComponents';

class CurrentWeekTrips extends Component {
  confirmationData = [
    {
      key: 1,
      from: 'Kodambakkam',
      to: 'DLF IT park',
      date: '13/15/2018',
      boardingTime: '12:45 PM',
      shiftType: 'adhoc'
    },
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
      listType={'manageCabs'}
      data={this.confirmationData}
      />
    </View>
    );
  }
}
export default CurrentWeekTrips;
