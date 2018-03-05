import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1 !== r2 });
      this.dataSource = ds.cloneWithRows(this.getDates());
  }
  getDates() {
    var ar = [];
    var d = new Date();
    while (true) {
      if (d.getDay() === 1) {
          this.addDateToArray(d, ar);
          break;
      }
      else {
          d.setDate(d.getDate() + 1);
      }
    }
    for (var i = 0; i < 6; i++) {
      d.setDate(d.getDate() + 1);
      this.addDateToArray(d, ar);
    }
  return ar;
}
  addDateToArray(d, ar) {
    var str = d.toDateString();
    ar.push({ day: str.substring(0, 3, 3),
    date: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` });
  }
  renderRow(row) {
    return <ListItem data={row} />;
  }
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

}
