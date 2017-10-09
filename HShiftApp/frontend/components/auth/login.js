import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

// import {loginUser, signupUser, addAlert} from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: ''
    }

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    // let {dispatch, fields: {email, password}} = this.props;
    console.log(this.state);
    this.setState({
      loading: true
    });
    // dispatch(loginUser(email.value, password.value)).then(() => {
    //   this.setState({
    //     loading: false
    //   });
    // });
  }

  render() {
    let {fields: {email, password}} = this.props;
    let {handleSubmit} = this.props;

    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              To-Do
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput
              onChangeText={text => this.setState({email: text})}
              placeholder="Email"
              style={styles.textInput}/>
          </View>
          <View style={styles.field}>
            <TextInput
              onChangeText={text => this.setState({password: text})}
              placeholder="Password"
              style={styles.textInput}/>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onSignIn}>
              <Text style={styles.button}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSignUp}>
              <Text style={styles.button}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  },
  formError: {
    color: 'red'
  }
});

export default Login;
