
import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import AuthMain from './auth/auth_main';
import MainNavigator from './main/main_navigator';

class AppEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const renderMainView = () => {
      if (this.props.currentUser) {
        return (
          <MainNavigator/>
        );
      } else {
        return (
          <AuthMain />
        );
      }
    };
    return (
      <View style={{flex: 1}}>
        {renderMainView()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
});


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps)(AppEntry);
