import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import LoginForm from './LoginForm';
//import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

import Props from 'prop-types';

export default class Login extends Component {


  render() {
    // const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../images/logoatiztech.jpg')}
            />
            <Text style={styles.tagline}>Personal Stylist At Your Finger Tips!</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>

      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  tagline: {
    color:'#ecf0f1',
    marginTop: 10,
    width: 140,
    textAlign: 'center',
    opacity: 0.9
  }
});
