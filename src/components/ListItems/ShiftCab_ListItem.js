import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { themeColor, shiftSelectedColor } from '../../constants';
import { CardSection, FloatingActionButton, DateAndDay, CaptionText } from '../commonComponents';
import * as actions from '../../actions';

const INITIAL_STATE = {
  s1Color: themeColor,
  s2Color: themeColor,
  s3Color: themeColor
};

class ShiftCabListItem extends Component {

  state = INITIAL_STATE ;
  updateCardSection(shift) {
  const { date } = this.props.data;
    switch (shift) {
      case 's1':
        if (this.state.s1Color === shiftSelectedColor) {
          this.unselectAll('s1');
        } else {
              this.setState({
                s1Color: shiftSelectedColor,
                s2Color: themeColor,
                s3Color: themeColor
              });
              this.props.shiftSelected({ shift: 's1', shiftDate: date });
          }
      break;
      case 's2' :
        if (this.state.s2Color === shiftSelectedColor) {
          this.unselectAll('s2');
        } else {
              this.setState({
                s1Color: themeColor,
                s2Color: shiftSelectedColor,
                s3Color: themeColor
              });
              this.props.shiftSelected({ shift: 's2', shiftDate: date });
          }
      break;
      case 's3' :
        if (this.state.s3Color === shiftSelectedColor) {
          this.unselectAll('s3');
        } else {
                this.setState({
                  s1Color: themeColor,
                  s2Color: themeColor,
                  s3Color: shiftSelectedColor
                });
              this.props.shiftSelected({ shift: 's3', shiftDate: date });
          }
      break;
      default: break;
    }
  }
  unselectAll(tempshift) {
    this.setState(INITIAL_STATE);
    this.props.shiftUnselected({ shift: tempshift, date: this.props.data.date });
  }
  render() {
    const { date, day } = this.props.data;
    return (
      <CardSection>
      <View>
        <FloatingActionButton
        bgColor={this.state.s1Color} label={'S1'}
        onPress={() => this.updateCardSection('s1')}
        />
        <CaptionText text={'6AM-3PM'} />
      </View>
      <View>
        <FloatingActionButton
        bgColor={this.state.s2Color}
        label={'S2'}
        onPress={() => this.updateCardSection('s2')}
        />
        <CaptionText text={'2PM-11PM'} />
      </View>
      <View>
        <FloatingActionButton
         bgColor={this.state.s3Color} label={'S3'}
         onPress={() => this.updateCardSection('s3')}
        />
        <CaptionText text={'10PM-7AM'} />
      </View>
      <DateAndDay date={date} day={day} />
      </CardSection>
    );
  }
}
/*function mapStateToProps(state) {
  return {
  };
}*/

export default connect(null, actions)(ShiftCabListItem);
