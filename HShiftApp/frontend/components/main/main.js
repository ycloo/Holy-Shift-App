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
import TeamIndexContainer from '../team/team_index_container';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfileContainer from '../profile/user_profile_container';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToTeam = this.navigateToTeam.bind(this);
    this.navigateToProfile = this.navigateToProfile.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  static navigationOptions = {
    title: 'Main',
  };


  componentDidMount() {
    // this.props.dispatch(getTeam(this.props.organization));
  }

  navigateToTeam(team) {
    this.props.receiveTeam(team);
    const { navigate } = this.props.navigation;
    navigate('Team', {team})
  }

  navigateToProfile() {
    const { navigate } = this.props.navigation;
    navigate('Profile', {name: 'Profile'})
  }

  handleLogOut() {
    this.props.logoutUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>

        <View style={styles.topBar}>
          <Text style={styles.title}>
            Welcome, {this.props.user.username}
          </Text>
          <Text style={styles.title}>
            Select Team:
          </Text>
        </View>
        <ScrollView
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
             <MenuOption onSelect={this.navigateToProfile} >
               <Text style={styles.profile}>Profile</Text>
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
  title: {
    top: Dimensions.get('window').height*.08,
    color: '#000053',
    fontSize: 28,
    alignSelf: 'center'
  },
  topBar: {
    position: 'absolute',
    zIndex: 1,
    height: Dimensions.get('window').height*.15,
    left: 0,
    top: 0,
    width: '100%',
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
  list: {
    top: Dimensions.get('window').height*.3
  },
  top: {
    flex: 9,
    width: '100%'
  },
  navBar: {
    flex: 1,
    backgroundColor: '#000053',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
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
  qr: {
    top: Dimensions.get('window').height*.12,
    color: 'blue',
    fontSize: 28,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 10,
    padding: 5
  },
  centerText: {
   flex: 1,
   fontSize: 18,
   padding: 32,
   color: '#777',
 },

 textBold: {
   fontWeight: '500',
   color: '#000',
 },

 buttonText: {
   fontSize: 21,
   color: 'rgb(0,122,255)',
 },

 buttonTouchable: {
   padding: 16,
 },
});

export default Main;
