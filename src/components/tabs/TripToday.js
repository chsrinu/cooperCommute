import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { View } from 'react-native';
import { List } from '../commonComponents';

class TripToday extends Component {
  state = { data: [], spinnerVisibility: true }
  componentWillUpdate() {
    axios
    .get('httpRequest')
    .then(response => this.setState({ spinnerVisibility: false, data: response }));
  }
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
      data={this.state.data}
      />
    </View>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.currentWeekData.dailyData };
}
export default connect(mapStateToProps)(TripToday);
