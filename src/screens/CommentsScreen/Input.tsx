import React, {useState} from 'react';
import { 
    View, 
    TextInput, 
    Image, 
    Text,
    StyleSheet
} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';


const Input = () => {

    const [newComment, setNewComment] = useState('');

    const onPost = () => {
        console.warn('posting comment');
        setNewComment('');
    }

  return (
    <View style={styles.inputContainer}>
        <Image
            source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}}
            style={styles.image}
        />

        <TextInput
            value={newComment}
            onChangeText={setNewComment}
            placeholder='Write a comment...'
            style={styles.input}
            multiline
        />

        <Text onPress={onPost} style={styles.inputBtn}>POST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: colors.border,
    },
    image: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 20,
    },
    input: {

        flex: 1,

        //borderColor: colors.border,
        //borderWidth: 1,
        borderRadius: 25,

        paddingVertical: 5,
        paddingHorizontal: 10,
        paddingRight: 50,
        marginLeft: 5,
    },
    inputBtn: {
        position: 'absolute',
        right: 20,
        top: 20,
        fontSize: fonts.size.s,
        fontWeight: fonts.weight.full,
        color: colors.primary
    }
})

export default Input;