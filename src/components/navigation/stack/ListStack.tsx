import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../../pages/list/List';
import DetailsScreen from '../../pages/details/Details';
import { navigationOptions } from '../../../constants/navigationOptions';

const Stack = createStackNavigator();

export default function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List Screen"
        component={ListScreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
}

