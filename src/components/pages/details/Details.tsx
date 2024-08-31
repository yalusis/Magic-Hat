import React, { useEffect, useLayoutEffect, useContext, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from '../../../types/navigationTypes';
import { styleDetails } from './styleDetails';
import { MyContext } from '../../../context/context';

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

function Details({ route, navigation }: DetailsScreenProps) {
  const { allCharacters } = useContext(MyContext);
  const { character: initialCharacter } = route.params;
  const [character, setCharacter] = useState(initialCharacter);

  useLayoutEffect(() => {
    navigation.setOptions({ title: character.name });
  }, [character.name, navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const updatedCharacter = allCharacters.find((item) => item.id === character.id);
      if (updatedCharacter) {
        setCharacter(updatedCharacter);
      }
    });

    return unsubscribe;
  }, [navigation, character.id, allCharacters]);

  return (
    <View style={styleDetails.container}>
      {character.image ? (
        <Image source={{ uri: character.image }} style={styleDetails.image} resizeMode="contain" />
      ) : (
        <View style={styleDetails.placeholderImage} />
      )}
      <View>
        {character.guessed ? (
          <>
            <Text style={styleDetails.details}>House: {character.house}</Text>
            <Text style={styleDetails.details}>Date of Birth: {character.dateOfBirth || 'Unknown'}</Text>
            <Text style={styleDetails.details}>Actor: {character.actor}</Text>
            <Text style={styleDetails.details}>Species: {character.species}</Text>
            <Text style={styleDetails.details}>Ancestry: {character.ancestry}</Text>
            <Text style={styleDetails.details}>Gender: {character.gender}</Text>
            <Text style={styleDetails.details}>Eye colour: {character.eyeColour}</Text>
            <Text style={styleDetails.details}>Hair colour: {character.hairColour}</Text>
          </>
        ) : (
          <View style={styleDetails.deniedBlock}>
            <Text style={styleDetails.deniedText}>ACCESS DENIED</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Details;
