import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';

export const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.white,
    },
    characterContainer: {
      alignItems: 'center',
    },
    image: {
      width: Dimensions.get('window').width / 2.5,
      height: Dimensions.get('window').height / 4,
      marginBottom: 10,
    },
    placeholderImage: {
      width: Dimensions.get('window').width / 2.5,
      height: Dimensions.get('window').height / 4,
      marginBottom: 10,
    },
});
