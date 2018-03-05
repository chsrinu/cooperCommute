import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform, UIManager, LayoutAnimation } from 'react-native';
import CardSection from './CardSection';
import FloatingActionButton from '../commonComponents/FloatingActionButton';
import DateAndDay from './DateAndDay';
import CaptionText from './CaptionText';
import * as actions from '../../actions';

class ListItem extends Component {

  constructor() {
      super();

      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  state ={ s1Color: 'blue', s2Color: 'blue', s3Color: 'blue' }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  updateCardSection(shift) {
    switch (shift) {
      case 's1':
        this.setState({
          s1Color: 'red',
          s2Color: 'blue',
          s3Color: 'blue'
        }); break;
      case 's2' :
      this.setState({
        s1Color: 'blue',
        s2Color: 'red',
        s3Color: 'blue'
      }); break;
      case 's3' :
      this.setState({
        s1Color: 'blue',
        s2Color: 'blue',
        s3Color: 'red'
      }); break;
      default: break;
    }
  }
  render() {
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
      <DateAndDay date={this.props.data.date} day={this.props.data.day} />
      </CardSection>
    );
  }
}
function mapStateToProps(state) {
  return {
  };
}

export default connect(null, actions)(ListItem);
