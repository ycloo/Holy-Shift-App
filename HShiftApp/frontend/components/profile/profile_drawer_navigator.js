import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import UserProfileContainer from './user_profile_container';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SampleOneScreen = ({ navigation }) => (
  <UserProfileContainer banner={'Sample One Screen'} navigation={navigation} />
);
SampleOneScreen.navigationOptions = {
  drawerLabel: 'Sample One',
  title: 'Profile',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

const SampleTwoScreen = ({ navigation }) => (
  <UserProfileContainer banner={'Sample Two Screen'} navigation={navigation} />
);
SampleTwoScreen.navigationOptions = {
  drawerLabel: 'Sample Two',
  title: 'Profile 2',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};

const DrawerExample = DrawerNavigator(
  {
    SampleOne: {
      screen: SampleOneScreen,
    },
    SampleTwo: {
      screen: SampleTwoScreen,
    },
  },
  {
    initialRouteName: 'SampleOne',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    title: 'Profile'
  }
);

export default DrawerExample;
