import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfileContainer from '../profile/user_profile_container';
import Dimensions from 'Dimensions';

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  static navigationOptions = {
    title: 'Agenda',
  };

  navigateTo = (item) => {
    const { navigate } = this.props.navigation;
    navigate(item);
  }

  handleLogOut = () => {
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
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
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

  //markedDates={{
  //  '2017-05-08': [{textColor: '#666'}],
  //  '2017-05-09': [{textColor: '#666'}],
  //  '2017-05-14': [{startingDay: true, color: 'blue'}, {endingDay: true, color: 'blue'}],
  //  '2017-05-21': [{startingDay: true, color: 'blue'}],
  //  '2017-05-22': [{endingDay: true, color: 'gray'}],
  //  '2017-05-24': [{startingDay: true, color: 'gray'}],
  //  '2017-05-25': [{color: 'gray'}],
  //  '2017-05-26': [{endingDay: true, color: 'gray'}]}}
  // monthFormat={'yyyy'}
  // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
  // markingType={'interactive'}
  // />

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.top}>
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
        <View style={styles.navBar}>
          <Menu style={styles.menu} renderer={renderers.SlideInMenu}>
            <MenuTrigger>
             <Icon name='chevron-up' size={38} color="white"/>
           </MenuTrigger>
           <MenuOptions style={styles.options}>
             <MenuOption style={styles.logoutOption} onSelect={this.handleLogOut} >
               <Text style={styles.logout}>Log Out</Text>
             </MenuOption>
             <MenuOption onSelect={() => this.navigateTo('Profile')} >
               <Text style={styles.profile}>Profile</Text>
             </MenuOption>
             <MenuOption onSelect={() => this.navigateTo('Calendar')} >
               <Text style={styles.profile}>Calendar</Text>
             </MenuOption>
           </MenuOptions>
         </Menu>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    height: Dimensions.get('window').height*.9,
    alignItems: 'center',
    width: '100%'
  },
  top: {
    flex: 9,
    width: '100%'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  navBar: {
    flex: 1,
    backgroundColor: '#000053',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  logout: {
    flex: 1,
    color: 'red',
    padding: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  profile: {
    flex: 1,
    color: '#000053',
    padding: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default AgendaScreen;
