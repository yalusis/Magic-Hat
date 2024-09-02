import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { styleCharacterItem } from './styleCharacterItem';
import { ExtendedCharacter } from '../../../../../types/extendedCharacter';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { CustomText } from '../../../../core/text/custom_text';
import { AppColors } from '../../../../../constants/colors';

interface CharacterItemProps {
  character: ExtendedCharacter;
  onPress: () => void;
}

const CharacterItem = ({ character, onPress }: CharacterItemProps) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styleCharacterItem.container} onPress={onPress}>
      {character.image ? (
        <Image source={{ uri: character.image }} style={styleCharacterItem.image} resizeMode="cover" />
      ) : (
        <View style={styleCharacterItem.placeholderImage} />
      )}
      <View style={styleCharacterItem.textContainer}>
        <CustomText fontSize={'14'} fontWeight={'bold'}>{character.name}</CustomText>
        <CustomText fontSize={'14'} fontWeight={'medium'}>Attempts: {character.attempts}</CustomText>
      </View>
      {!character.guessed && (
        <Pressable style={styleCharacterItem.reloadButton} onPress={() => {navigation.navigate('Home', { character });}}>
          <Icon
            name="reload"
            size={36}
            color={AppColors.silver}
          />
        </Pressable>
      )}
      <Icon
        name={character.guessed ? 'checkmark-circle' : 'close-circle-outline'}
        size={36}
        color={character.guessed ? AppColors.green : AppColors.red}
      />
    </Pressable>
  );
};

export default CharacterItem;
