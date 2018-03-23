import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { responsiveHeight,
          responsiveWidth,
          responsiveFontSize
        } from 'react-native-responsive-dimensions';


class FloatingActionButton extends Component {
/*state={ bgColor: '#54C0EB', textColor: 'white' };
changeBg = () => {
  if (this.state.bgColor === 'grey') {
    this.setState({ bgColor: '#54C0EB', textColor: 'white' });
  } else {
    this.setState({ bgColor: 'grey', textColor: '#54C0EB' });
  }
}*/
render() {
return (
  <TouchableOpacity
   style={[styles.containerStyle, { backgroundColor: this.props.bgColor }]}
  onPress={this.props.onPress}
  >
  <Text style={[styles.textStyle, { color: this.props.textColor }]}>{this.props.label}</Text>
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
    fontSize: responsiveFontSize(5)
  },

};
export { FloatingActionButton };
