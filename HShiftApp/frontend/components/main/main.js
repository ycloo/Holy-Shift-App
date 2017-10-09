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


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToTeam = this.navigateToTeam.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(getTeam(this.props.organization));
  }

  navigateToTeam(team) {
    // console.log(this.props);
    this.props.receiveTeam(team);

    this.props.navigator.push({
        component: TeamIndexContainer,
        title: 'User Page',
        navigationBarHidden: true
      });
  }

  handleLogOut() {
    this.props.logoutUser();
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>
            Holy Shift App!
          </Text>
          <Text style={styles.title}>
            Select Team:
          </Text>
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
               <Icon name='chevron-up' size={38} color="#0c9258"/>
             </MenuTrigger>
             <MenuOptions style={styles.options}>
               <MenuOption style={styles.logoutOption} onSelect={this.handleLogOut} >
                 <Text style={styles.logout}>Log Out</Text>
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
  },
  title: {
    top: Dimensions.get('window').height*.08,
    color: '#606162',
    fontSize: 28,
    alignSelf: 'center'
  },
  top: {
    flex: 9,
  },
  logout: {
    flex: 1,
    color: 'red',
    padding: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  list: {
    top: Dimensions.get('window').height*.3
  },
  navBar: {
    flex: 1,
    backgroundColor: '#2ecc71',
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
