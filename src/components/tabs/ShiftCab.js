import React, { Component } from 'react';
import { View } from 'react-native';
import List from '../commonComponents/List';
import Button from '../commonComponents/Button';

export default class ShiftCab extends Component {
  render() {
    return (
    <View style={{ flex: 1 }}>
      <List style={{ flex: 0.8 }} />
      <Button style={{ flex: 0.2 }}> Submit Selected </Button>
    </View>
    );
  }
}
