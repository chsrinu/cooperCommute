import React, { Component } from 'react';
import { Platform, UIManager, LayoutAnimation, FlatList } from 'react-native';
import ShiftCabListItem from '../ListItems/ShiftCab_ListItem';
import ConfirmOrCancelCabListItem from '../ListItems/Confirm_Cancel_ListItem';
import images from '../../../images';

export class List extends Component {
  constructor() {
      super();

      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
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

  chooseList() {
    switch (this.props.listType) {
      case 'bookCab':
        return this.getDates();
      case 'cabConfirmation':
      case 'manageCabs':
      case 'TripToday':
        return this.props.data;
      default :
    }
  }
  getImageSrc(shiftType) {
    return shiftType === 'adhoc' ? images.iconTo : images.iconToandFro;
  }
  renderRow(item, props) {
    switch (props.listType) {
      case 'bookCab':
        return <ShiftCabListItem data={item} />;
      case 'cabConfirmation':
        return (<ConfirmOrCancelCabListItem
                  data={item}
                  imgsrc={props.imgsrc}
        />);
      case 'manageCabs':
      case 'TripToday' :
          return (<ConfirmOrCancelCabListItem
                    data={item}
                    imgsrc={this.getImageSrc(item.shiftType)}
                    rejectImage={images.rejectArrow}
          />);

      default :
    }
  }

  render() {
    return (
      <FlatList
        data={this.chooseList()}
        renderItem={({ item }) => this.renderRow(item, this.props)}
      />
    );
  }

}
