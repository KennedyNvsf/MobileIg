import {  StyleSheet } from 'react-native';
//themes
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export default StyleSheet.create({
   
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentTextWrapper: {
    flex: 1,
  },
  commentText: {
    color: colors.black,
    lineHeight: 17,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  footer: {
    flexDirection:'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  }
  })