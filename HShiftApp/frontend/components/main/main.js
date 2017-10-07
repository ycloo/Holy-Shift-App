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
import UserPageContainer from '../organization/organization_index_container';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToOrganization = this.navigateToOrganization.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(getOrganization(this.props.organization));
  }

  navigateToUser(org) {
    // console.log(this.props);
    this.props.receiveOrganization(org);

    this.props.navigator.push({
        component: OrganizationIndex,
        title: 'User Page',
        navigationBarHidden: true
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>
            Holy Shift
          </Text>
          <Text style={styles.title}>
            Select Organization:
          </Text>
        </View>

        <ScrollView
            style={styles.list}
            automaticallyAdjustContentInsets={false}>
            <FlatList
              data={[
                {key: 'Work'},
                {key: 'Cool Club'},
                {key: 'Volunteering at the park'},
              ]}
              renderItem={({item}) => <TouchableOpacity onPress={() => this.navigateToOrg(item.key)}><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
            />
          </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    height: Dimensions.get('window').height*.9,
    alignItems: 'center'
  },
  title: {
    top: Dimensions.get('window').height*.08,
    color: '#606162',
    fontSize: 28,
    alignSelf: 'center'
  },
  topBar: {
    position: 'absolute',
    zIndex: 1,
    height: Dimensions.get('window').height*.15,
    left: 0,
    top: 0,
    width: '100%'
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
