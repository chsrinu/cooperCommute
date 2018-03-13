import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextHeading, Button, NumericButtons } from '../commonComponents';

import * as actions from '../../actions';

class AdhocCab extends Component {
  handleDatePicked = (time) => {
    this.props.hideResetTimer();
    this.props.setPickUpTime(time);
  }
  hideDateTimePicker = () => {
    this.props.hideResetTimer();
  }
  render() {
    console.log('time is ', this.props);
    return (
      <View style={{ flex: 1 }}>
        <TextHeading label={'Pick Up'} />
        <NumericButtons>{this.props.pickUpTime} </NumericButtons>
        <DateTimePicker
          isVisible={this.props.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='time'
          is24Hour={false}
          datePickerModeAndroid={'calendar'}
        />
        <Button onPress={() => this.props.showResetTimer()}> Reset </Button>
        <Button
        onPress={() => Actions.bookingConfirmation({ shiftType: 'adhoc' })}
        > Proceed </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
return {
     isDateTimePickerVisible: state.resetTimer.isDateTimePickerVisible,
     pickUpTime: state.resetTimer.pickUpTime
   };
 }
export default connect(mapStateToProps, actions)(AdhocCab);
