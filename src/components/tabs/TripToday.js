import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { List } from '../commonComponents';

class TripToday extends Component {
  //state = { data: [], spinnerVisibility: true }
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
