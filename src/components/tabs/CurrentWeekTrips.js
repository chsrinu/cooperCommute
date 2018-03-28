import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List } from '../commonComponents';
import * as actions from '../../actions';

class CurrentWeekTrips extends Component {
  state = { data: [], spinnerVisibility: true }
  componentWillMount() {
    axios.post('http://10.79.8.122:8080/getMyCabSchedule/ ', { empId: '350629' })
    .then(response => {
      //console.log('gotresponse', response.data);
      this.setState({ data: response.data });
      this.props.getScheduledCabs(response.data);
    });
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
<<<<<<< Updated upstream

export default CurrentWeekTrips
=======
/*function mapStateToProps(state) {
  return { data: state.manageTripData };
}*/
export default connect(null, actions)(CurrentWeekTrips);
>>>>>>> Stashed changes
