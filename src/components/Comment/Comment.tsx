import React, {useState} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
//styling
import styles from "./Comment.styles";
import colors from '../../themes/colors';
//icons
import AntDesign from "react-native-vector-icons/AntDesign";
import { IComment } from '../../types/models';

interface IFeedComment {
    comment: IComment;
    isCommentPage: boolean;
}

const Comment = ({comment, isCommentPage = false}: IFeedComment) => {

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  }

  return (
    <View style={styles.comments}>

      {isCommentPage && (
        <Image
          source={{uri: comment.user.image}}
          style={styles.avatar}
        />
      )}

      <View style={styles.commentTextWrapper}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        
        {isCommentPage && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLike} hitSlop={3}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  )
}

export default Comment