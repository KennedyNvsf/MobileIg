import React from 'react';
import {Text, View, FlatList} from "react-native";
//components
import { Comment } from '../../components';
import Input from './Input';
//dummy data
import comments from "../../assets/data/comments.json";

type CommentsScreenProps = {
    
};

const CommentsScreen:React.FC<CommentsScreenProps> = () => {
    
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={comments}
                renderItem={({item}) => <Comment comment={item} isCommentPage/>}
                style={{padding: 10}}
            />
            <Input/>
        </View>
    )
}
export default CommentsScreen;