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


// import {signupUser, signupUser, addAlert} from '../actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    // let {dispatch, fields: {email, password}} = this.props;
    console.log(this.state);
    // dispatch(signupUser(email.value, password.value)).then(() => {
    //   this.setState({
    //     loading: false
    //   });
    // });
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.signUpTitle}>
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
                style={styles.textInput}/>
            </View>
            <View style={styles.field}>
              <TextInput
                onChangeText={text => this.setState({firstName: text})}
                placeholder="First Name"
                style={styles.textInput}/>
            </View>
            <View style={styles.field}>
              <TextInput
                onChangeText={text => this.setState({lastName: text})}
                placeholder="Last Name"
                style={styles.textInput}/>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.signup} onPress={this.onSignUp}>
                <Text style={styles.signupText}>Sign Up</Text>
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
  signUpTitle: {
    color: '#000053',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  inputs: {

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
  },
  buttonContainer: {
    borderRadius: 20,
    padding: 20,
    width: '75%',
    alignSelf: 'center',
  },
  signup: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#000053',
    padding: 20,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  },
  formError: {
    color: 'red'
  }
});

export default SignUp;
