import { TabNavigator } from 'react-navigation';
import AdhocCab1 from '../components/tabs/AdhocCab';
import ShiftCab1 from '../components/tabs/ShiftCab';

const MyTabView = TabNavigator({
  AdhocCab: { screen: AdhocCab1 },
  ShiftCab: { screen: ShiftCab1 }
},
{
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
});

export default MyTabView;
