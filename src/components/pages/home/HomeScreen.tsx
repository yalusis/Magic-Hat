import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { MyContext } from '../../../context/context';

function HomeScreen() {
  const {allCharacters} = useContext(MyContext);
  console.log(allCharacters.length);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
