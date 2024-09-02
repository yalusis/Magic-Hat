/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './stack/HomeStack';
import ListStack from './stack/ListStack';
import { StyleSheet } from 'react-native';
import { AppColors } from '../../constants/colors';

const Tab = createBottomTabNavigator();

export default function MainDrawerAndRouter(): React.ReactNode {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = route.name === 'HomeTab' ? 'home' : 'list';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: AppColors.black,
          tabBarInactiveTintColor: AppColors.gray,
          tabBarLabelStyle: {
            color: AppColors.black,
          },
          tabBarItemStyle: {
            paddingVertical: 5,
          },
          tabBarStyle: {
            borderTopColor: AppColors.black,
            borderTopWidth: StyleSheet.hairlineWidth,
            height: 65,
            paddingTop: 5,
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
