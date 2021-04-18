import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/headers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

// Create a component
class App extends Component {

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC13vnMUfmAi2yukFUVC89iKG6OPn-CKmM',
      authDomain: 'authentication-ab0bb.firebaseapp.com',
      databaseURL: 'https://authentication-ab0bb.firebaseio.com',
      storageBucket: 'authentication-ab0bb.appspot.com',
      messagingSenderId: '988207743825',
    })
  }

  render() { 
    return (
      <View style={styles.container}>
        <Header headerText="Login"/>
        <LoginForm/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App;
