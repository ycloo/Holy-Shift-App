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
import ShiftDetailContainer from '../shift/shift_detail_container';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TeamIndexContainer from '../team/team_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamsTab: true,
      shiftsTab: false
    }

    this.handleBack = this.handleBack.bind(this);
    this.resetTabs = this.resetTabs.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.navigateToTeam = this.navigateToTeam.bind(this);
    this.viewShift = this.viewShift.bind(this);
  }

  handleBack() {
    this.props.navigator.pop();
  }

  resetTabs() {
    this.setState({
      teamsTab: false,
      shiftsTab: false
    })
  }

  viewShift(shift) {
    this.props.receiveShift(shift)
    this.props.navigator.push({
        component: ShiftDetailContainer,
        title: 'Shift Detail',
        navigationBarHidden: true
      });
  }

  navigateToTeam(team) {
    this.props.receiveTeam(team);

    this.props.navigator.push({
        component: TeamIndexContainer,
        title: 'Team Index',
        navigationBarHidden: true
      });
  }

  changeTab(tab) {
    this.resetTabs();
    this.setState({
      [tab]: true
    })
  }

  render() {
    let teamsOrShifts;
    // if (this.state.teamsTab) {
    //   teamsOrShifts = this.state.session.currentUser.teams.map(team => {
    //     return ( <TouchableOpacity>
    //       <Text>{team.name}</Text>
    //     </TouchableOpacity>)
    //   }) } else {
    //   teamsOrShifts = this.session.currentUser.shifts.map( shift => {
    //     return ( <TouchableOpacity>
    //       <Text>{shift.name} {shift.time}</Text>
    //     </TouchableOpacity>)
    //   })
    // }

    if (this.state.teamsTab) {
      teamsOrShifts =  <ScrollView
        style={styles.list}
        automaticallyAdjustContentInsets={false}>
        <FlatList
          data={[
            {key: 'Work'},
            {key: 'Cool Club'},
            {key: 'Volunteering'},
          ]}
          renderItem={({item}) => <TouchableOpacity onPress={() => this.navigateToTeam(item.key)}><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
          />
      </ScrollView>
    } else {
      teamsOrShifts = <ScrollView
          style={styles.list}
          automaticallyAdjustContentInsets={false}>
          <FlatList
            data={[
              {key: '10:00am Volunteering'},
              {key: '10:30am Cool Club'},
              {key: '11:00am Work'}
            ]}
            renderItem={({item}) => <TouchableOpacity onPress={()=>this.viewShift(item.key)}><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
          />
        </ScrollView>
    }



    return(
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.handleBack} style={styles.back}>
            <Icon name="chevron-left" size={30} color='#000053'/>
          </TouchableOpacity>
          <Header><Text>Your Dashboard</Text></Header>
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity style={ this.state.teamsTab ? styles.tabActive : styles.tab } onPress={()=>this.changeTab('teamsTab')}>
            <Text style={styles.tabText}>Teams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ this.state.shiftsTab ? styles.tabActive : styles.tab } onPress={()=>this.changeTab('shiftsTab')}>
            <Text style={styles.tabText}>Shifts</Text>
          </TouchableOpacity>
        </View>
        <Text>{this.props.user.username}</Text>
        {teamsOrShifts}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topBar: {
    position: 'absolute',
    zIndex: 1,
    height: Dimensions.get('window').height*.15,
    left: 0,
    top: 0,
    width: '100%',
  },
  back:{
    padding: 5,
    width: '10%',
    alignItems: 'center',
    top: Dimensions.get('window').height*.05,
    left: 0,
    zIndex: 1
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    top: Dimensions.get('window').height*.20,
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
  },
  list: {
    top: Dimensions.get('window').height*.3
  },
  item: {
    fontSize: 20,
    height: 44,
    textAlign: 'center',
    backgroundColor: '#dae7e0',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },


});

export default UserProfile;
