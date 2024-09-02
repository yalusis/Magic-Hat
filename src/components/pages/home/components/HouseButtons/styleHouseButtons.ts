import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../../../../constants/colors';

export const styleHouseButtons = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
      marginTop: 30,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    button: {
      flex: 1,
      marginHorizontal: 5,
      height: Dimensions.get('window').height / 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      backgroundColor: AppColors.lightGray,
    },
    fullWidthButton: {
      height: Dimensions.get('window').height / 10,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      backgroundColor: AppColors.lightGray,
    },
    image: {
      width: Dimensions.get('window').width / 12,
      height: Dimensions.get('window').height / 20,
      marginBottom: 5,
    },
});
