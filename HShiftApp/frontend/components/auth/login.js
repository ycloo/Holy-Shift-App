import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import {receiveCurrentUser} from '../../actions/session_actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    console.log(this.props.state);

    this.props.receiveCurrentUser('123');
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Holy Shift App
            </Text>
          </View>
          <View style={styles.inputs}>
            <View style={styles.field}>
              <Icon name={`email-outline`} size={26} color='#000053'/>
              <TextInput
                onChangeText={text => this.setState({email: text})}
                placeholder="Email"
                style={styles.textInput}/>
            </View>
            <View style={styles.field}>
              <Icon name={`lock-outline`} size={26} color='#000053'/>
              <TextInput
                onChangeText={text => this.setState({password: text})}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}/>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.login} onPress={this.onSignIn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      );
    }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    top: Dimensions.get('window').height*.01,
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: '#000053',
    fontSize: 35,
    top: Dimensions.get('window').height*.05,
    marginBottom: 20,
    textAlign: 'center'
  },
  inputs: {
    top: Dimensions.get('window').height*.11,
  },
  field: {
    borderRadius: 5,
    padding: 5,
    margin: 20,
    backgroundColor: 'white',
    borderBottomColor: '#000053',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  textInput: {
    height: 26,
    color: '#000053',
    textAlign: 'center',
    width: '100%'
  },
  buttonContainer: {
    borderRadius: 20,
    padding: 20,
    width: '75%',
    alignSelf: 'center',
  },
  login: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#000053',
    padding: 20,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  },
  formError: {
    color: 'red'
  }
});

const mapStateToProps = state => ({
  state
});
const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: (id) => dispatch(receiveCurrentUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
