import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../../../../constants/colors';

export const styleFilter = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      marginHorizontal: 30,
      borderColor: AppColors.black,
      borderWidth: 3,
    },
    searchInput: {
      flex: 1,
      height: Dimensions.get('window').height / 14,
      paddingHorizontal: 20,
      fontSize: 16,
      color: AppColors.black,
      width: '100%',
    },
    searchIcon: {
      paddingHorizontal: 15,
    },
  });
