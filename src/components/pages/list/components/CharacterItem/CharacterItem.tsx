import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styleCharacterItem } from './styleCharacterItem';
import { ExtendedCharacter } from '../../../../../types/extendedCharacter';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

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
        <Text style={styleCharacterItem.name}>{character.name}</Text>
        <Text style={styleCharacterItem.attempts}>Attempts: {character.attempts}</Text>
      </View>
      {!character.guessed && (
        <Pressable style={styleCharacterItem.reloadButton} onPress={() => {navigation.navigate('Home', { character });}}>
          <Icon
            name="reload"
            size={36}
            color="silver"
          />
        </Pressable>
      )}
      <Icon
        name={character.guessed ? 'checkmark-circle' : 'close-circle-outline'}
        size={36}
        color={character.guessed ? 'green' : 'red'}
      />
    </Pressable>
  );
};

export default CharacterItem;
