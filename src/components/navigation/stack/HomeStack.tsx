/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home/Home';
import { navigationOptions } from '../../../constants/navigationOptions';
import ResetButton from '../components/ResetButton/ResetButton';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          ...navigationOptions,
          headerRight: () => (
            <ResetButton/>
          ),
        }}
        />
    </Stack.Navigator>
  );
}

export default HomeStack;
