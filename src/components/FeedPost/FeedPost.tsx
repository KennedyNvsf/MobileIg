import React, {useState} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
//components
import {Comment, DoubleTap} from "../";
//styling
import styles from "./FeedPost.styles";
//themes
import colors from '../../themes/colors';
//icons
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
//types
import { IPost } from '../../types/models';

interface IFeedPost  {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {

  const [descExp, setDescExp] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDesc = () => {
    setDescExp(prev => !prev);
  }

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  }

  //double tap functionality
  let lastTap = 0
  const postDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      toggleLike()
    } else {
      lastTap = now;
    }
  }
  

  return (
    <View style={styles.post}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />

        <Text style={styles.userName}>{post.user.username}</Text>

        <Entypo 
          name='dots-three-horizontal' 
          size={16}
          style={styles.dots}
          color={colors.black}
        />
      </View>

      {/* CONTENT */}
      <DoubleTap onDoubleTap={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoubleTap>

      {/* FOOTER */}
      <View style={styles.footer}>
        {/* icons */}
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>

          <Ionicons
            name='chatbubble-outline'
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather 
            name='send' 
            size={24} 
            style={styles.icon}
            color={colors.black}
          />

          <Feather 
            name='bookmark' 
            size={24} 
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* likes */}
        <Text style={styles.text}>
          Liked by{' '} 
          <Text style={styles.bold}>Deka</Text>
          {' '}and{' '} 
          <Text style={styles.bold}>{post.noflikes} others...</Text>
        </Text>

        {/* desc */}
        <Text style={styles.text} numberOfLines={descExp ? 0 : 2}>
          <Text style={styles.bold} >{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDesc}>{descExp ? 'less' : 'more..'}</Text>

        {/* comments */}
        <Text>View all {post.nofcomments} comments...</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment}/>
        ))}
        {/* POST DATE */}
        <Text>{post.createdAt}</Text>
      </View>

    </View>
  )
};



export default FeedPost;