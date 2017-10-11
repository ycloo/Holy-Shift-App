import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput,
  FlatList,
  Linking
} from 'react-native';
import Dimensions from 'Dimensions';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamsTab: true,
      shiftsTab: false
    }

    this.onBack = this.onBack.bind(this);
    this.resetTabs = this.resetTabs.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  onBack() {
    this.props.navigator.pop();
  }

  resetTabs() {
    this.setState({
      teamsTab: false,
      shiftsTab: false
    })
  }

  changeTab(tab) {
    this.resetTabs();
    this.setState({
      [tab]: true
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TouchableOpacity onPress={()=>this.changeTab('teamsTab')}><Text>Teams</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>this.changeTab('shiftsTab')}><Text>Shifts</Text></TouchableOpacity>
        </View>
        <Text>{this.props.user.username}</Text>
        <Text>{this.state.teamsTab ? 'Team' : 'Shift'}</Text>
        <TouchableOpacity onPress={this.onBack}><Text>Back</Text></TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: Dimensions.get('window').height*.10,
  },

});

export default UserProfile;
