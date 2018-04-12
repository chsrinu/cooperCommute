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
  renderRow(item, index, props) {
    switch (props.listType) {
      case 'bookCab':
        return <ShiftCabListItem data={item} index={index} />;
      case 'cabConfirmation':
        return (<ConfirmOrCancelCabListItem
                  data={item}
                  index={index}
                  imgsrc={this.props.imgsrc}
        />);
      case 'manageCabs':
      case 'TripToday' :
          console.log(item);
          return (<ConfirmOrCancelCabListItem
                    data={item}
                    index={index}
                    imgsrc={item.rqstTrpType === 'Round' ? images.iconToandFro : images.iconTo}
          />);
      default :
    }
  }

  render() {
    console.log('list', this.props.data);
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item, index }) => this.renderRow(item, index, this.props)}
      />
    );
  }

}
export { List };
