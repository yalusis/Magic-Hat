import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { MyContext } from '../../../context/context';
import Affiliations from '../../affiliations/Affiliations';
import HouseButtons from './components/HouseButtons/HouseButtons';
import { styleHome } from './styleHome';

function HomeScreen() {
  const { allCharacters, updateAffiliations  } = useContext(MyContext);

  const character = allCharacters.length > 0 ? allCharacters[0] : null;

  const handleHouseSelection = (house: string) => {
    if (character) {
      const isSuccess = house === character.house;
      updateAffiliations(isSuccess);
    }
  };

  return (
    <View style={styleHome.container}>
      <Affiliations />
      <View style={styleHome.characterContainer}>
        {character && (
          <>
            {character.image ? (
              <Image source={{ uri: character.image }} style={styleHome.image} resizeMode="contain"/>
            ) : (
              <View style={styleHome.placeholderImage} />
            )}
            <Text style={styleHome.name}>{character.name}</Text>
          </>
        )}
      </View>
      <HouseButtons onButtonPress={handleHouseSelection}/>
    </View>
  );
}

export default HomeScreen;
