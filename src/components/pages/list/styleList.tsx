import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';

export const styleList = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.white,
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: AppColors.lightGrayAlt,
    },
    itemText: {
      fontSize: 16,
    },
  });
