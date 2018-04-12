import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List, Spinner } from '../commonComponents';
import * as actions from '../../actions';

class CurrentWeekTrips extends Component {
  state = { data: [], spinnerVisibility: true }
  componentWillMount() {
    /*axios.post('http://10.79.8.122:8080/getMyCabSchedule/ ', { empId: '350629' })
    .then(response => {
      //console.log('gotresponse', response.data);
      /*setTimeout(function(){
      axios.post('http://10.79.8.122:8080/profile', { empId: 350629 })
      .then(response => this.props.loginSuccess(response.data));
      Actions.main(); Actions.menuScreen();
    }, 5000);*/
    setTimeout(() => {
        axios.post('http://10.79.8.122:8080/getMyCabSchedule/ ', { empId: '350629' })
        .then(response => {
          this.setState({ spinnerVisibility: false });
          this.setState({ data: response.data });
          this.props.getScheduledCabs(response.data);
        });
    }, 2000);
}
getView() {
  if (this.state.spinnerVisibility) {
    return (
      <View style={{ alignItems: 'center' }}>
      <Spinner />
    </View>);
  }
  return (<List listType={'manageCabs'} data={this.state.data} />);
}
  render() {
    return (
    <View>
      {this.getView()}
    </View>
    );
  }
}

export default connect(null, actions)(CurrentWeekTrips);
