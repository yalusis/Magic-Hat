import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home/Home';
import { navigationOptions } from '../../../constants/navigationOptions';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
