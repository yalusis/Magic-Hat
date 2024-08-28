import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home/HomeScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
