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
import Header from '../styling/header';

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
        <Header><Text>Dashboard</Text></Header>
        <View style={styles.tabs}>
          <TouchableOpacity style={ this.state.teamsTab ? styles.tabActive : styles.tab } onPress={()=>this.changeTab('teamsTab')}>
            <Text style={styles.tabText}>Teams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ this.state.shiftsTab ? styles.tabActive : styles.tab } onPress={()=>this.changeTab('shiftsTab')}>
            <Text style={styles.tabText}>Shifts</Text>
          </TouchableOpacity>
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    alignItems: 'center',
  },
  tab: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  tabActive: {
    padding: 20,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  tabText: {
    fontSize: 20,
    color: '#000053'
  }


});

export default UserProfile;
