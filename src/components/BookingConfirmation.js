import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, List } from './commonComponents';
import * as actions from '../actions';

class BookingConfirmation extends Component {
  render() {
    console.log('conf', this.props);
    return (
      <View style={{ flex: 1 }}>
        <List
        listType={'cabConfirmation'}
        data={this.props.data}
        imgsrc={this.props.imgsrc}
        />
        <Button
        onPress={() => {
            this.props.submitCabRequest(this.props.action);
            Actions.menuScreen();
          }}
        > Book </Button>
      </View>
    );
  }
}
function mapStateToProps(state) {
  if (state.cabCategory.isShiftCab) {
    return { data: state.shiftCabData.datesArray };
  }
  return { data: state.adhocCabData.datesArray };
}
export default connect(mapStateToProps, actions)(BookingConfirmation);
