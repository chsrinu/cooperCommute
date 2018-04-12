import { AsyncStorage } from 'react-native';
import { ACTION_LOGIN_SUCCESS } from '../constants';

const INITIAL_STATE = { userData: [] };
export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case ACTION_LOGIN_SUCCESS :
      saveData(action.payload);
      return { state };
    default:
      return { state };
  }
};
async function saveData(payload) {
  /*
  <Text style={styles.textStyle}>Saiyyad Mohammad Adil</Text>
  <Text style={styles.textStyle}>Software Engineer</Text>remove
  <NormalText text={'Address'} text1={'Manapakkam Chennai Tamilnadu -008390'}/>
  <NormalText text={'Contact'} text1={'8526657517'} />
  <NormalText text={'Alternate Contact'} text1={'9566276880'} />remove
  <NormalText text={'emp Id'} text1={'chec/sadil'}/>
  <NormalText text={'Email'} text1={'saiyyadmohammad.adil@mrcooper.com'}/>
  */
  //var temp = [];
  var temp={
    empName:payload.empName,
    empId:payload.empId,
    empEmail:payload.empEmail,
    empHomeAddr:payload.empHomeAddr,
    empPhone:payload.empPhone
  }
  /*temp.push({empName:payload.empName});
  temp.push({empId:payload.empId});
  temp.push({empEmail:payload.empEmail});
  temp.push({empHomeAddr:payload.empHomeAddr});
  temp.push({empPhone:payload.empPhone});*/

  try {
      await AsyncStorage.setItem('empData', JSON.stringify(temp));
  } catch (error) {
// Error saving data
  }
/*try {
  var value = await AsyncStorage.getItem('data');
  console.log('value is ', JSON.parse(value));
  if (value !== null){
    return value
  }
} catch (error) {
// Error retrieving data
}*/
}
