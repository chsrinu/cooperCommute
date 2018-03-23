import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List } from '../commonComponents';


class CurrentWeekTrips extends Component {
  state = { data: [], spinnerVisibility: true }
  /*var confirmationData = [
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
  ];*/
  componentWillUpdate() {
    axios
    .get('httpRequest')
    .then(response => this.setState({ spinnerVisibility: false, data: response }));
  }
  render() {
    return (
    <View>
      <List
      listType={'manageCabs'}
      data={this.data}
      />
    </View>
    );
  }
}

export default CurrentWeekTrips
