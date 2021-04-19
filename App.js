import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/headers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Create a component
class App extends Component {

  state={
    loggedIn: false
  }
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC13vnMUfmAi2yukFUVC89iKG6OPn-CKmM',
      authDomain: 'authentication-ab0bb.firebaseapp.com',
      databaseURL: 'https://authentication-ab0bb.firebaseio.com',
      storageBucket: 'authentication-ab0bb.appspot.com',
      messagingSenderId: '988207743825',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button
          icon={
            <Icon
                name="sign-out"
                size={30}
                color="red"
            />
            }
            title='Log Out'
            type='outline'
            titleStyle={{color: 'red', fontSize: 20, padding: 30}}
            buttonStyle={{borderRadius: 50, borderColor: 'red', borderWidth: 1}}
            containerStyle={{padding: 5, flex: 1}}
            onPress={() => firebase.auth().signOut()}
        />            
      )
    } 
    return <LoginForm />
  }

  render() { 
    return (
      <View style={styles.container}>
        <Header headerText="Authentication"/>
        {this.renderContent()}
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
