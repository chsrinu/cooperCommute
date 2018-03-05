import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { responsiveHeight,
          responsiveWidth,
          responsiveFontSize
        } from 'react-native-responsive-dimensions';


class FloatingActionButton extends Component {
state={ bgColor: '#54C0EB' };
changeBg = () => {
  if (this.state.bgColor === 'green') {
    this.setState({ bgColor: '#54C0EB' });
  } else {
    this.setState({ bgColor: 'green' });
  }
}
render() {
return (
  <TouchableOpacity
   style={[styles.containerStyle, { backgroundColor: this.props.bgColor }]}
  onPress={this.props.onPress}
  >
  <Text style={styles.textStyle}>{this.props.label}</Text>
  </TouchableOpacity>
);
}
}
const styles = {
  containerStyle: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    borderRadius: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 8
  },
  textStyle: {
    color: 'white',
    fontSize: responsiveFontSize(5)
  },

};
export default FloatingActionButton;
