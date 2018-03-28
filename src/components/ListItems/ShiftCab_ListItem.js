import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { themeColor, shiftSelectedColor, FABTextColor } from '../../constants';
import { CardSection, FloatingActionButton, DateAndDay, CaptionText } from '../commonComponents';
import * as actions from '../../actions';

const INITIAL_STATE = {
  s1Color: themeColor,
  s2Color: themeColor,
  s3Color: themeColor,
  s1TextColor: FABTextColor,
  s2TextColor: FABTextColor,
  s3TextColor: FABTextColor,
};

class ShiftCabListItem extends Component {

  state = INITIAL_STATE ;
  updateCardSection(shift) {
  const { date } = this.props.data;
    switch (shift) {
      case 's1':
        if (this.state.s1Color === shiftSelectedColor) {
          this.unselectAll();
        } else {
              this.setState({
                s1Color: shiftSelectedColor,
                s1TextColor: themeColor,
                s2Color: themeColor,
                s2TextColor: FABTextColor,
                s3Color: themeColor,
                s3TextColor: FABTextColor,
              });
              this.props.shiftSelected({ shift: 's1', shiftDate: date });
          }
      break;
      case 's2' :
        if (this.state.s2Color === shiftSelectedColor) {
          this.unselectAll();
        } else {
              this.setState({
                s1Color: themeColor,
                s1TextColor: FABTextColor,
                s2Color: shiftSelectedColor,
                s2TextColor: themeColor,
                s3Color: themeColor,
                s3TextColor: FABTextColor,
              });
              this.props.shiftSelected({ shift: 's2', shiftDate: date });
          }
      break;
      case 's3' :
        if (this.state.s3Color === shiftSelectedColor) {
          this.unselectAll();
        } else {
                this.setState({
                  s1Color: themeColor,
                  s1TextColor: FABTextColor,
                  s2Color: themeColor,
                  s2TextColor: FABTextColor,
                  s3Color: shiftSelectedColor,
                  s3TextColor: themeColor,
                });
              this.props.shiftSelected({ shift: 's3', shiftDate: date });
          }
      break;
      default: break;
    }
  }
  unselectAll() {
    this.setState(INITIAL_STATE);
    this.props.shiftUnselected({ shiftDate: this.props.data.date });
  }
  render() {
    const { date, day } = this.props.data;
    return (
      <CardSection>
      <View>
        <FloatingActionButton
        bgColor={this.state.s1Color} textColor={this.state.s1TextColor} label={'S1'}
        onPress={() => this.updateCardSection('s1')}
        />
        <CaptionText text={'06:00-15:00'} />
      </View>
      <View>
        <FloatingActionButton
        bgColor={this.state.s2Color}
        textColor={this.state.s2TextColor}
        label={'S2'}
        onPress={() => this.updateCardSection('s2')}
        />
        <CaptionText text={'14:00-23:00'} />
      </View>
      <View>
        <FloatingActionButton
         bgColor={this.state.s3Color} label={'S3'}
         textColor={this.state.s3TextColor}
         onPress={() => this.updateCardSection('s3')}
        />
        <CaptionText text={'22:00-07:00'} />
      </View>
      <DateAndDay date={date} day={day} />
      </CardSection>
    );
  }
}

export default connect(null, actions)(ShiftCabListItem);
