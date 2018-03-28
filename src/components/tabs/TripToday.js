import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { List } from '../commonComponents';

class TripToday extends Component {
  //state = { data: [], spinnerVisibility: true }
 /*confirmationData = [
    {
      key: 1,
      from: 'Guindy',
      to: 'DLF IT park',
      date: '13/15/2018',
      boardingTime: '12:45 PM',
      shiftType: 'shift'
    },
  ];*/
  render() {
    return (
    <View>
      <List
      listType={'TripToday'}
      data={this.props.data}
      />
    </View>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.manageTripData.dailyData };
}
export default connect(mapStateToProps)(TripToday);
