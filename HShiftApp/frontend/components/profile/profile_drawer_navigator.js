import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import UserProfileContainer from './user_profile_container';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InboxScreen = ({ navigation }) => (
  <UserProfileContainer banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

const DraftsScreen = ({ navigation }) => (
  <UserProfileContainer banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default DrawerExample;
