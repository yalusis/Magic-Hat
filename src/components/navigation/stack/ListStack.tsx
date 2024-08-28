import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../../pages/details/DetailsScreen';
import ListScreen from '../../pages/list/ListScreen';

const Stack = createStackNavigator();

function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default ListStack;
