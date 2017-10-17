import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';
import MainContainer from './main_container';
import TeamIndexContainer from '../team/team_index_container';
import ShiftDetailContainer from '../shift/shift_detail_container';
import UserProfileContainer from '../profile/user_profile_container';
import CalendarScreen from '../calendar/calendars';
import MenuScreen from '../calendar/menu';
import AgendaScreenContainer from '../calendar/agenda_container';
import { MenuContext } from 'react-native-popup-menu';
import {
  StackNavigator,
} from 'react-navigation';

const BasicApp = StackNavigator({
  Agenda: {screen: AgendaScreenContainer},
  Main: {screen: MainContainer},
  Team: {screen: TeamIndexContainer},
  Shift: {screen: ShiftDetailContainer},
  Profile: {screen: UserProfileContainer},
  Calendar: {screen: CalendarScreen},
  Menu: {screen: MenuScreen}
});


class MainNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuContext>
        <BasicApp/>
      </MenuContext>
    );
  }

}

export default MainNavigator;
