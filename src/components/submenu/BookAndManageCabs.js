import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import AdhocCab from '../../components/tabs/AdhocCab';
import ShiftCab from '../../components/tabs/ShiftCab';
import CurrentWeekTrips from '../../components/tabs/CurrentWeekTrips';
import TripToday from '../../components/tabs/TripToday';

let routeConfig1 = {
  ShiftCab: { screen: ShiftCab },
  AdhocCab: { screen: AdhocCab }
};
let routeConfig2 = {
  Weekly: { screen: CurrentWeekTrips },
  Today: { screen: TripToday }
};
let tabNavigatorConfig = {
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#54C0EB',
    style: {
      backgroundColor: 'grey',
    },
    labelStyle: {
      color: '#54C0EB'
    }
  }
};

const BookCabTabView = TabNavigator(routeConfig1, tabNavigatorConfig);
const ManageCabsTabView = TabNavigator(routeConfig2, tabNavigatorConfig);

class BookAndManageCabs extends Component {

  getTabView() {
    if (this.props.bookingCab) {
      return (<BookCabTabView />);
    }
    return (<ManageCabsTabView />);
  }
  render() {
    return (this.getTabView());
  }

}
export { BookAndManageCabs };
