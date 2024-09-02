import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../../../../constants/colors';

export const styleCharacterItem = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginHorizontal: 30,
    },
    image: {
      width: Dimensions.get('window').width / 9,
      height: Dimensions.get('window').height / 12,
      marginHorizontal: 15,
    },
    placeholderImage: {
      width: Dimensions.get('window').width / 9,
      height: Dimensions.get('window').height / 12,
      backgroundColor: AppColors.veryLightGray,
      marginHorizontal: 15,
    },
    textContainer: {
      flex: 1,
    },
    reloadButton: {
      marginHorizontal: 10,
    },
  });
