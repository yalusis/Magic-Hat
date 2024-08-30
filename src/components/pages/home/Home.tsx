import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { MyContext } from '../../../context/context';
import Affiliations from '../../affiliations/Affiliations';
import HouseButtons from './components/HouseButtons/HouseButtons';
import { styleHome } from './styleHome';
import { getRandomCharacterData } from '../../../constants/api';
import { useRoute } from '@react-navigation/native';
import { HomeScreenRouteProp } from '../../../types/navigationTypes';
import { ExtendedCharacter } from '../../../types/extendedCharacter';

function Home(): React.JSX.Element {
  const { allCharacters, updateAffiliations, addCharacter } = useContext(MyContext);
  const route = useRoute<HomeScreenRouteProp>();

  const [currentCharacter, setCurrentCharacter] = useState<ExtendedCharacter | undefined>(
    route.params?.character || allCharacters[0]
  );

  useEffect(() => {
    if (!route.params?.character) {
      setCurrentCharacter(allCharacters[0]);
    } else {
      setCurrentCharacter(route.params.character);
    }
  }, [allCharacters, route.params]);

  const onRefresh = useCallback(async () => {
    const newCharacter = await getRandomCharacterData();
    if (newCharacter) {
      const addedCharacter = addCharacter(newCharacter);
      setCurrentCharacter(addedCharacter);
    }
  }, [addCharacter]);

  const handleHouseSelection = (house: string) => {
    if (currentCharacter) {
      const isSuccess = house === currentCharacter.house;
      updateAffiliations(currentCharacter.id, isSuccess);
    }
  };

  return (
    <ScrollView
      style={styleHome.container}
      refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}>
      <Affiliations />
      <View style={styleHome.characterContainer}>
        {currentCharacter && (
          <>
            {currentCharacter.image ? (
              <Image source={{ uri: currentCharacter.image }} style={styleHome.image} resizeMode="contain"/>
            ) : (
              <View style={styleHome.placeholderImage} />
            )}
            <Text style={styleHome.name}>{currentCharacter.name}</Text>
          </>
        )}
      </View>
      <HouseButtons onButtonPress={handleHouseSelection}/>
    </ScrollView>
  );
}

export default Home;
