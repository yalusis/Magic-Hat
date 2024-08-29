import React, { useCallback, useContext } from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { MyContext } from '../../../context/context';
import Affiliations from '../../affiliations/Affiliations';
import HouseButtons from './components/HouseButtons/HouseButtons';
import { styleHome } from './styleHome';
import { getRandomCharacterData } from '../../../constants/api';

function Home() {
  const { allCharacters, updateAffiliations, addCharacter, removeCharacter } = useContext(MyContext);

  const character = allCharacters.length > 0 ? allCharacters[0] : null;

  const onRefresh = useCallback(async () => {
    if (character) {
      removeCharacter(character.id);
    }
    const newCharacter = await getRandomCharacterData();
    if (newCharacter) {
      addCharacter(newCharacter);
    }
  }, [addCharacter, character, removeCharacter]);

  const handleHouseSelection = (house: string) => {
    if (character) {
      const isSuccess = house === character.house;
      updateAffiliations(isSuccess);
    }
  };

  return (
    <ScrollView
      style={styleHome.container}
      refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}>
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
    </ScrollView>
  );
}

export default Home;
