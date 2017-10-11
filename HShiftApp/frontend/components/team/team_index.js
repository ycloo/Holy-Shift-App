import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView,
  FlatList
} from 'react-native';
import Dimensions from 'Dimensions';
import ShiftDetailContainer from '../shift/shift_detail_container';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);


    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.navigator.pop();
  }

  viewShift(shift) {
    this.props.receiveShift(shift)
    this.props.navigator.push({
        component: ShiftDetailContainer,
        title: 'Shift Detail',
        navigationBarHidden: true
      });
  }

  render() {
    return (

      <View>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.handleBack} style={styles.back}>
            <Icon name="chevron-left" size={30} color='#12512d'/>
          </TouchableOpacity>
          <Text style={styles.greeting}>{this.props.teams.currentTeam}!</Text>
        </View>

        <ScrollView
            style={styles.list}
            automaticallyAdjustContentInsets={false}>
            <FlatList
              data={[
                {key: '10:00am'},
                {key: '10:30am'},
                {key: '11:00am'}
              ]}
              renderItem={({item}) => <TouchableOpacity onPress={()=>this.viewShift(item.key)}><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
            />
          </ScrollView>

      </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    fontSize: 30,
    top: Dimensions.get('window').height*.19,
    textAlign: 'center',
    backgroundColor: '#dae7e0',
    padding: 10,
    borderRadius: 10,
    width: '75%',
  },
  back:{
    padding: 5,
    width: '10%',
    alignItems: 'center',
    top: Dimensions.get('window').height*.05,
    left: 0
  },
  greeting: {
    alignSelf: 'center',
    alignItems: 'center',
    top: Dimensions.get('window').height*.01,
    fontSize: 35
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
  topBar: {
    position: 'absolute',
    zIndex: 1,
    height: Dimensions.get('window').height*.15,
    left: 0,
    top: 0,
    width: '100%',
  },
  recs: {
    top: Dimensions.get('window').height*.20,
  },
  list: {
    top: Dimensions.get('window').height*.23,
  },
  test: {
    width: 200,
    height: 400,
    top: Dimensions.get('window').height*.35,
    position: 'absolute',
  },
  button: {
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'blue',
    padding: 5,
    alignItems: 'center',
    top: Dimensions.get('window').height*.17,
    left: 0
  }
});



export default TeamIndex;
