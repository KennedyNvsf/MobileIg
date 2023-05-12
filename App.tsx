import React from 'react';
import { View, StyleSheet } from 'react-native';
//screens
import { HomeScreen } from './src/screens';



const App = () => {

  return (
    <View style={styles.app}>
      <HomeScreen/>
    </View>
  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})

export default App