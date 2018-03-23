import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Text
} from 'react-native';

export const EditText = (props)=> {
   return(
       <View style={styles.viewStyle}>
       <Text style={styles.textstyle}>{props.text}</Text>
       <TextInput
       style = {styles.EditStyle}
       secureTextEntry = {props.sEn}
       underlineColorAndroid='rgba(0,0,0,0)' 
       placeholder={props.placeText}
       placehoderTextColor = 'black'/>
       </View>
   );
}

const styles = StyleSheet.create({
    EditStyle:{
        alignSelf: 'stretch',
        borderRadius:10,
        backgroundColor:'white',     
    },
    textstyle:{
       fontWeight: 'bold',
       marginBottom:10,
       color:'white'
    },
    viewStyle:{
        marginTop:15
    }


});