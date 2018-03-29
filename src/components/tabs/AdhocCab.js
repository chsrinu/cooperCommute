import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextHeading, Button, NumericButtons } from '../commonComponents';
import images from '../../../images';
import * as actions from '../../actions';
import { ACTION_ADHOC_CAB_REQUEST } from '../../constants';

class AdhocCab extends Component {
  handleDatePicked = (time) => {
    console.log('updatedTime', time);
    this.props.setPickUpTime(time);
  }
  hideDateTimePicker = () => {
    this.props.hideResetTimer();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextHeading label={'Pick Up'} />
        <NumericButtons>{this.props.pickUpTime} </NumericButtons>
        <DateTimePicker
          isVisible={this.props.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='time'
          is24Hour
          datePickerModeAndroid={'calendar'}
        />
        <Button onPress={() => this.props.showResetTimer()}> Reset </Button>
        <Button
        onPress={() => {
          this.props.updateCabCategory(false);
          Actions.bookingConfirmation(
            { imgsrc: images.iconTo, action: ACTION_ADHOC_CAB_REQUEST });
        }}
        > Proceed </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
return {
     isDateTimePickerVisible: state.adhocCabData.isDateTimePickerVisible,
     pickUpTime: state.adhocCabData.datesArray[0].rqstInTm
   };
 }
export default connect(mapStateToProps, actions)(AdhocCab);
