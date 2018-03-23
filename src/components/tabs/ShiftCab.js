import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { List, Button } from '../commonComponents';
import * as actions from '../../actions';
import images from '../../../images';
import { ACTION_SHIFT_CAB_REQUEST } from '../../constants';

class ShiftCab extends Component {
  getDates() {
    var ar = [];
    var d = new Date();
    for (j = 0; j < 7; j++) {
      if (d.getDay() === 1) {
          this.addDateToArray(d, ar, 0);
          break;
      } else {
          d.setDate(d.getDate() + 1);
      }
    }
    for (i = 1; i < 7; i++) {
      d.setDate(d.getDate() + 1);
      this.addDateToArray(d, ar, i);
    }
  return ar;
}
addDateToArray(d, ar, i) {
  var str = d.toDateString();
  ar.push({ key: i,
     day: str.substring(0, 3, 3),
  date: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` });
}
  render() {
    return (
    <View style={{ flex: 1 }}>
      <List
      listType={'bookCab'}
      data={this.getDates()}
      style={{ flex: 0.8 }}
      />
      <Button
      style={{ flex: 0.2 }}
      onPress={() => {
        this.props.updateCabCategory(true);
        this.props.saveDates();
        Actions.bookingConfirmation(
          { imgsrc: images.iconToandFro, action: ACTION_SHIFT_CAB_REQUEST });
      }}
      > Proceed </Button>
    </View>
    );
  }
}
export default connect(null, actions)(ShiftCab);
