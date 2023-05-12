import React from 'react';
import {FlatList} from 'react-native';
//components
import { FeedPost } from '../../components';
//dummy data
import posts from "../../assets/data/posts.json";



const HomeScreen = () => {

  return (  
    <FlatList
    data={posts}
    renderItem={({item}) => <FeedPost post={item}/>}
    showsVerticalScrollIndicator={false}
    />
  )
};


export default HomeScreen