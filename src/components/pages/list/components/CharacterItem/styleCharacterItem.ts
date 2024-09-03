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
      width: Dimensions.get('window').width / 10,
      height: Dimensions.get('window').height / 15,
      marginHorizontal: 10,
    },
    placeholderImage: {
      width: Dimensions.get('window').width / 10,
      height: Dimensions.get('window').height / 15,
      backgroundColor: AppColors.veryLightGray,
      marginHorizontal: 10,
    },
    textContainer: {
      flex: 1,
    },
    reloadButton: {
      marginHorizontal: 10,
    },
});
