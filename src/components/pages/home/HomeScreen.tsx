import React, { useContext } from 'react';
import { View } from 'react-native';
import { MyContext } from '../../../context/context';
import Affiliations from '../../affiliations/Affiliations';

function HomeScreen() {
  const {allCharacters} = useContext(MyContext);
  console.log(allCharacters.length);
  return (
    <View>
      <Affiliations />
    </View>
  );
}

export default HomeScreen;
