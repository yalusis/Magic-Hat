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
            {character.house && <Text style={styleDetails.details}>House: {character.house}</Text>}
            {character.actor && <Text style={styleDetails.details}>Actor: {character.actor}</Text>}
            {character.species && <Text style={styleDetails.details}>Species: {character.species}</Text>}
            {character.ancestry && <Text style={styleDetails.details}>Ancestry: {character.ancestry}</Text>}
            {character.gender && <Text style={styleDetails.details}>Gender: {character.gender}</Text>}
            {character.eyeColour && <Text style={styleDetails.details}>Eye Colour: {character.eyeColour}</Text>}
            {character.hairColour && <Text style={styleDetails.details}>Hair Colour: {character.hairColour}</Text>}
            {character.hogwartsStaff !== undefined && <Text style={styleDetails.details}>Hogwarts Staff: {character.hogwartsStaff ? 'Yes' : 'No'}</Text>}
            {character.hogwartsStudent !== undefined && <Text style={styleDetails.details}>Hogwarts Student: {character.hogwartsStudent ? 'Yes' : 'No'}</Text>}
            {character.patronus && <Text style={styleDetails.details}>Patronus: {character.patronus}</Text>}
            {character.wand.core && <Text style={styleDetails.details}>Wand Core: {character.wand.core}</Text>}
            {character.wand.length !== null && <Text style={styleDetails.details}>Wand Length: {character.wand.length ? `${character.wand.length} cm` : 'Unknown'}</Text>}
            {character.wand.wood && <Text style={styleDetails.details}>Wand Wood: {character.wand.wood}</Text>}
            {character.wizard !== undefined && <Text style={styleDetails.details}>Wizard: {character.wizard ? 'Yes' : 'No'}</Text>}
            {character.dateOfBirth && <Text style={styleDetails.details}>Date of Birth: {character.dateOfBirth}</Text>}
            {character.yearOfBirth !== null && <Text style={styleDetails.details}>Year of Birth: {character.yearOfBirth ? character.yearOfBirth : 'Unknown'}</Text>}
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
