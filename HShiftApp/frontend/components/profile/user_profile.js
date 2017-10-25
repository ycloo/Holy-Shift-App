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
  Linking,
  Button
} from 'react-native';
import Dimensions from 'Dimensions';
import Header from '../styling/header';
import ShiftDetailContainer from '../shift/shift_detail_container';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TeamIndexContainer from '../team/team_index_container';
import {Agenda} from 'react-native-calendars';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamsTab: true,
      shiftsTab: false,
      items: {}
    };

    this.resetTabs = this.resetTabs.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.navigateToTeam = this.navigateToTeam.bind(this);
    this.viewShift = this.viewShift.bind(this);
  }

  resetTabs() {
    this.setState({
      teamsTab: false,
      shiftsTab: false
    })
  }

  navigateToProfile() {
    const { navigate } = this.props.navigation;
    navigate('Profile', {name: 'Profile'})
  }
  navigateToCalendar() {
    const { navigate } = this.props.navigation;
    navigate('Calendar')
  }

  handleLogOut() {
    this.props.logoutUser();
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Shift for Work on ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.shift, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  viewShift(shift) {
    this.props.receiveShift(shift)
    const { navigate } = this.props.navigation;
    navigate('Shift', {shift})
  }

  navigateToTeam(team) {
    this.props.receiveTeam(team);
    const { navigate } = this.props.navigation;
    navigate('Team', {team})
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
      teamsOrShifts =
      <View style={styles.teams}>
        <ScrollView style={styles.list}
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
      </View>
    } else {
      // teamsOrShifts = <ScrollView
      //     style={styles.list}
      //     automaticallyAdjustContentInsets={false}>
      //     <FlatList
      //       data={[
      //         {key: '10:00am Volunteering'},
      //         {key: '10:30am Cool Club'},
      //         {key: '11:00am Work'}
      //       ]}
      //       renderItem={({item}) => <TouchableOpacity onPress={()=>this.viewShift(item.key)}><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
      //     />
      //   </ScrollView>
      teamsOrShifts = <View style={styles.agenda}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={new Date().toISOString().slice(0,10)}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          theme={{calendarBackground: '#d6f0ef', agendaKnobColor: '#000053'}}>
        </Agenda>
      </View>
    }

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Header><Text>Your Dashboard</Text></Header>
        </View>

          <TouchableOpacity
         onPress={() => this.props.navigation.navigate('DrawerOpen')}
       >
       <MaterialIcons name="list" size={40} style={{ color: '#000053' }} />
       </TouchableOpacity>
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
    zIndex: 0,
    height: Dimensions.get('window').height*.30,
    left: 0,
    top: Dimensions.get('window').height*.02,
    width: '100%',
    flex: .6
  },
  agenda: {
    flex: 4,
    width: '100%'
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
    alignItems: 'center',
    flex: .6
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
  teams: {
    flex: 4
  },
  list: {
    top: Dimensions.get('window').height*.05
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
  shift: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
});

export default UserProfile;
