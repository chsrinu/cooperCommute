import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, Button } from '../commonComponents';


export default class ShiftCab extends Component {
  render() {
    return (
    <View style={{ flex: 1 }}>
      <List listType={'bookCab'} style={{ flex: 0.8 }} />
      <Button
      style={{ flex: 0.2 }}
      onPress={() => Actions.bookingConfirmation({ shiftType: 'shift' })}
      > Proceed </Button>
    </View>
    );
  }
}
