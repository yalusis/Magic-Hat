import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Image, ScrollView, RefreshControl } from 'react-native';
import { MyContext } from '../../../context/context';
import Affiliations from '../../affiliations/Affiliations';
import HouseButtons from './components/HouseButtons/HouseButtons';
import { styleHome } from './styleHome';
import { useRoute } from '@react-navigation/native';
import { HomeScreenRouteProp } from '../../../types/navigationTypes';
import { ExtendedCharacter } from '../../../types/extendedCharacter';
import { getRandomCharacterData } from '../../../api/api';
import { CustomText } from '../../core/text/custom_text';
import PlaceholderImage from '../../placeholder_image/PlaceholderImage';

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

  const handleHouseSelection = async(house: string) => {
    if (currentCharacter) {
      const isSuccess = house === currentCharacter.house;
      updateAffiliations(currentCharacter.id, isSuccess);

      if (isSuccess) {
        const newCharacter = await getRandomCharacterData();
        if (newCharacter) {
          const addedCharacter = addCharacter(newCharacter);
          setCurrentCharacter(addedCharacter);
        }
      }
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
              <PlaceholderImage style={styleHome.placeholderImage}/>
            )}
            <CustomText fontSize={'18'} fontWeight={'bold'}>{currentCharacter.name}</CustomText>
          </>
        )}
      </View>
      <HouseButtons onButtonPress={handleHouseSelection}/>
    </ScrollView>
  );
}

export default Home;
