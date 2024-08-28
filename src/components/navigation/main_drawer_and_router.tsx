/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './stack/HomeStack';
import ListStack from './stack/ListStack';

const Tab = createBottomTabNavigator();

export default function MainDrawerAndRouter(): React.ReactNode {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = route.name === 'Home' ? 'home' : 'list';

            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="ListTab" component={ListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
