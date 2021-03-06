import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  NavigatorIOS,
  Animated,
  Dimensions
} from 'react-native';

class Header extends React.Component {

  render() {
    return(
      <Text style={{fontSize: 24, color: '#000053', textAlign: 'center', fontWeight: 'bold' }}>
        {this.props.children}
      </Text>
    );
  }
}

export default Header;
