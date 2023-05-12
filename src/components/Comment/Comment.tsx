import React from 'react';
import { View, Text } from 'react-native';
//styling
import styles from "./Comment.styles";
import colors from '../../themes/colors';
//icons
import AntDesign from "react-native-vector-icons/AntDesign";
import { IComment } from '../../types/models';

interface IFeedComment {
    comment: IComment;
}

const Comment = ({comment}: IFeedComment) => {
    const isLiked = true;
  return (
    <View style={styles.comments}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username}</Text>{' '}
            {comment.comment}
          </Text>

          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>
  )
}

export default Comment