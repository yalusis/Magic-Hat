import React, { useEffect, useLayoutEffect, useContext, useState } from 'react';
import { View, Image } from 'react-native';
import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from '../../../types/navigationTypes';
import { styleDetails } from './styleDetails';
import { MyContext } from '../../../context/context';
import { CustomText } from '../../core/text/custom_text';
import { AppColors } from '../../../constants/colors';
import PlaceholderImage from '../../placeholder_image/PlaceholderImage';

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
        <PlaceholderImage style={styleDetails.placeholderImage} />
      )}
      <View>
        {character.guessed ? (
          <>
            {character.house && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>House: {character.house}</CustomText>}
            {character.actor && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Actor: {character.actor}</CustomText>}
            {character.species && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Species: {character.species}</CustomText>}
            {character.ancestry && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Ancestry: {character.ancestry}</CustomText>}
            {character.gender && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Gender: {character.gender}</CustomText>}
            {character.eyeColour && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Eye Colour: {character.eyeColour}</CustomText>}
            {character.hairColour && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Hair Colour: {character.hairColour}</CustomText>}
            {character.hogwartsStaff !== undefined && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Hogwarts Staff: {character.hogwartsStaff ? 'Yes' : 'No'}</CustomText>}
            {character.hogwartsStudent !== undefined && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Hogwarts Student: {character.hogwartsStudent ? 'Yes' : 'No'}</CustomText>}
            {character.patronus && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Patronus: {character.patronus}</CustomText>}
            {character.wand.core && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Wand Core: {character.wand.core}</CustomText>}
            {character.wand.length !== null && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Wand Length: {character.wand.length ? `${character.wand.length} cm` : 'Unknown'}</CustomText>}
            {character.wand.wood && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Wand Wood: {character.wand.wood}</CustomText>}
            {character.wizard !== undefined && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Wizard: {character.wizard ? 'Yes' : 'No'}</CustomText>}
            {character.dateOfBirth && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Date of Birth: {character.dateOfBirth}</CustomText>}
            {character.yearOfBirth !== null && <CustomText fontSize={'14'} fontWeight={'medium'} style={styleDetails.details}>Year of Birth: {character.yearOfBirth ? character.yearOfBirth : 'Unknown'}</CustomText>}
          </>
        ) : (
          <View style={styleDetails.deniedBlock}>
            <CustomText color={AppColors.red} fontSize={'20'} fontWeight={'bold'}>ACCESS DENIED</CustomText>
          </View>
        )}
      </View>
    </View>
  );
}

export default Details;
