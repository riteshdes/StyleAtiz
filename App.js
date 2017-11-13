/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login/Login';
import { StackNavigator } from 'react-navigation';
//import Expo from 'expo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const NavigationApp = StackNavigator({
Home: { screen: Login },
}, {
  navigationOptions: {
    header: false,
  }
//Profile: {screen: ProfileScreen },

});

export default class App extends Component<{}> {

  
  render() {
    return (
      <NavigationApp />

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Hello!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
