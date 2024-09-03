import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';

export const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: AppColors.white,
  },
  image: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 4,
    marginRight: 10,
  },
  placeholderImage: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 4,
    backgroundColor: AppColors.veryLightGray,
    marginRight: 10,
  },
  details: {
    marginBottom: 5,
  },
  deniedBlock: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width / 2.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: AppColors.red,
    borderWidth: 5,
  },
});

