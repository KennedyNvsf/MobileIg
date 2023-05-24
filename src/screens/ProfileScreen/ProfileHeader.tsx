import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//themes
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';
//components
import { Button } from '../../components';
//dummy
import user from "../../assets/data/user.json";

//PROFILE HEADER
const ProfileHeader = () => {

    return (
      <View style={styles.root}>
          <View style={styles.headerRow}>
              {/* Profile Image */}
              <Image
                  source={{uri: user.image}}
                  style={styles.avatar}
              />
              {/* Posts, Followers, Following Numbers */}
              <View style={styles.statsContainer}>
                  <Text style={styles.statsNum}>98</Text>
                  <Text>Posts</Text>
              </View>
  
              <View style={styles.statsContainer}>
                  <Text style={styles.statsNum}>1K</Text>
                  <Text>Followers</Text>
              </View>
  
              <View style={styles.statsContainer}>
                  <Text style={styles.statsNum}>123</Text>
                  <Text>Following</Text>
              </View>
          </View>
  
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.bio}</Text>
  
          <View style={styles.btnContainer}>
              <Button 
                  text='Edit Profile'
                  onPress={() => console.warn('On Edit Profile')}
              />
  
              <Button 
                  text='Saved'
                  onPress={() => console.warn('On Edit Profile')}
              />
          </View>
  
          
      </View>
    )
  }
  const styles = StyleSheet.create({
    root: {
       padding: 10,
    },
    headerRow: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginVertical: 10,
    },
    avatar: {
       width: 100,
       aspectRatio: 1,
       borderRadius: 50,
    },
    statsContainer: {
       alignItems: 'center',
    },
    statsNum: {
       fontSize: fonts.size.md,
       fontWeight: fonts.weight.full,
       color: colors.black,
    },
    name: {
       color: colors.black,
       fontWeight: fonts.weight.semi
    },
    btnContainer: {
       flexDirection: 'row',
    }
   
   });
     
export default ProfileHeader