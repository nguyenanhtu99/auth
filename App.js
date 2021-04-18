import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/headers';

// Create a component
const App = () => {
  return (
    <View>
      <Header headerText="Auth"/>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 20
  }
}

export default App;
