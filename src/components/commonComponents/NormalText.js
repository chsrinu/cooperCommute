import React from 'react';
import{
    Text,
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

const NormalText = (props) =>{
    return (<View style={styles.ViewStyle}>
        <Text style={styles.textStyle}>
        {props.text}</Text>
        <Text style={styles.text1Style}>
        {props.text1}</Text>
        </View>);
}

const styles = StyleSheet.create({
    ViewStyle : {
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginTop:5,
       backgroundColor: '#4EBAE4',
       flex:1
    },
    textStyle : {
        color : 'white',
        fontWeight: 'bold',
        marginLeft:10,
        flex:1,
       
    },
    
    text1Style : {
        color : 'white',
        marginLeft:10,
        flex:1,

    }
})

export { NormalText };