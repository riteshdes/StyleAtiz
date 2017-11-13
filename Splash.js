import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends  Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style= {styles.titlewrapper}>
        <Text style={styles.title}>Style-At-Iz App!</Text>
      </View>
      <View>
        <Text style= {styles.subtitle}>Powered by React</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2ecc71',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: 'normal',
    paddingBottom: 20
  },
  titlewrapper: {
    justifyContent: 'center',
    flex: 1
  }
});
