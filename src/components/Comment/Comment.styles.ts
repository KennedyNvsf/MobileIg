import {  StyleSheet } from 'react-native';
//themes
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export default StyleSheet.create({
   
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    
    icon: {
      marginHorizontal: 5,
    },
    comments: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    commentText: {
      color: colors.black,
      flex: 1,
      lineHeight: 17,
    },
    bold: {
      fontWeight: fonts.weight.bold,
    }
  })