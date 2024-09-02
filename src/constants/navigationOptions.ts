import { StackNavigationOptions } from '@react-navigation/stack';
import { AppColors } from './colors';

export const navigationOptions: StackNavigationOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      borderBottomColor: AppColors.black,
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      paddingVertical: 15,
    },
};
