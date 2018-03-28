import React, { Component } from 'react';
import { Platform, UIManager, LayoutAnimation, FlatList } from 'react-native';
import ShiftCabListItem from '../ListItems/ShiftCab_ListItem';
import ConfirmOrCancelCabListItem from '../ListItems/Confirm_Cancel_ListItem';
import images from '../../../images';

class List extends Component {
  constructor() {
      super();
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderRow(item, props) {
    switch (props.listType) {
      case 'bookCab':
        return <ShiftCabListItem data={item} />;
      case 'cabConfirmation':
        return (<ConfirmOrCancelCabListItem
                  data={item}
                  imgsrc={this.props.imgsrc}
        />);
      case 'manageCabs':
      case 'TripToday' :
          return (<ConfirmOrCancelCabListItem
                    data={item}
                    imgsrc={props.imgsrc}
                    rejectImage={images.rejectArrow}
          />);
      default :
    }
  }

  render() {
    console.log('list', this.props.data);
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => this.renderRow(item, this.props)}
      />
    );
  }

}
export { List };
