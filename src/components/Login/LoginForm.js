import React, {Component} from 'react';
import { View, StyleSheet, TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView, StatusBar, AsyncStorage} from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Props from 'prop-types';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder='username or email'
          OnChangeText= { (username) => this.setState({username})}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder='password'
          OnChangeText= { (password) => this.setState({password})}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  login = () => {
    //alert("Test");

    alert(this.state.username);

    fetch('http:// 192.168.29.153:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })

    .then((response) => response.json())
    .then((res) => {
      if (res.success === true) {
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Profile');
      }
      else {
        alert(res.message);
      }
    })
    .done();
  }
}

const styles = StyleSheet.create({
container: {
  padding: 20

},
input: {
  height: 40,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  marginBottom: 10,
  color: '#FFFFFF',
  paddingHorizontal: 10
},
buttonContainer: {
  backgroundColor: '#2980b9',
  paddingVertical: 15

},
buttonText: {
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: '700'
}

})
