import React from 'react';
import { View, StyleSheet } from 'react-native';
//screens
import { 
  HomeScreen,
  ProfileScreen,
  CommentsScreen
} from './src/screens';



const App = () => {

  return (
    <View style={styles.app}>
      <ProfileScreen/>
    </View>
  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})

export default App