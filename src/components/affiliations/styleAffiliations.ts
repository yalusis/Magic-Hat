import { StyleSheet } from 'react-native';
import { AppColors } from '../../constants/colors';

export const styleAffiliations = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },
  box: {
    width: 95,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.lightGray,
    borderWidth: 1,
  },
  });
