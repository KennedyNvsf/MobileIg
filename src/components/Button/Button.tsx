import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

interface IButton {
    text?: string,
    onPress?: () => void,
}

const Button = ({
    text = '',
    onPress = () => {}
}: IButton) => {

  return (
    <Pressable onPress={onPress} style={btnStyles.container}>
      <Text style={btnStyles.label}>{text}</Text>
    </Pressable>
  )
}

const btnStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 5,

        padding: 5,
        margin: 5,
        alignItems: "center",

        flex: 1,
    },

    label: {
        color: colors.black,
        fontWeight: fonts.weight.semi,
    }
})

export default Button;