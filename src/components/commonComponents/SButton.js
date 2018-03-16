import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

const SampleButton = (props)=>{
    return(
        <TouchableOpacity style={styles.buttonStyle}
        onPress={props.onPress}
        >
           <Text style={styles.TextStyle}>{props.buttonText}</Text>
        </TouchableOpacity>   
    );
}

const styles=StyleSheet.create({
    buttonStyle:{
        alignSelf:'stretch',
        marginHorizontal:10,
        borderRadius:10,
        marginTop:10,
        height:50,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#1D7B9F',
    },
    TextStyle:{
        color:'white',
        fontSize:20,
    }
});
export { SampleButton };