import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    let currDate = new Date().toISOString().slice(0,10);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Holy Shift</Text>
        <Calendar
          style={styles.calendar}
          current={currDate}
          onDayPress={this.onDayPress}
          markedDates={{[this.state.selected]: {selected: true, marked: true}}}
          firstDay={1}
        />
      </ScrollView>
    );
  }

  onDayPress(day) {
    console.log(day,'day');
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

export default CalendarScreen;
