import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../../pages/list/List';
import Details from '../../pages/details/Details';
import { navigationOptions } from '../../../constants/navigationOptions';
import ResetButton from '../components/ResetButton/ResetButton';
import { ListStackParamList } from '../../../types/navigationTypes';

const Stack = createStackNavigator<ListStackParamList>();

export default function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={List}
        options={{
          ...navigationOptions,
          headerRight: () => (
            <ResetButton/>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
}

