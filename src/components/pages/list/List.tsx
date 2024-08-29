import React, { useState, useContext } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { MyContext } from '../../../context/context';
import { ListScreenNavigationProp } from '../../../types/navigationTypes';
import Affiliations from '../../affiliations/Affiliations';
import Icon from 'react-native-vector-icons/Ionicons';
import { styleList } from './styleList';

interface ListScreenProps {
  navigation: ListScreenNavigationProp;
}

const List = ({ navigation }: ListScreenProps) => {
  const { allCharacters } = useContext(MyContext);
  const [filter, setFilter] = useState<string>('');

  const filteredCharacters = allCharacters.filter(character =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styleList.container}>
      <Affiliations />
      <View style={styleList.searchContainer}>
        <TextInput
          style={styleList.searchInput}
          placeholder="Filter characters..."
          value={filter}
          onChangeText={setFilter}
          placeholderTextColor="black"
        />
        <Icon name="search" size={20} color="black" style={styleList.searchIcon} />
      </View>
      <FlatList
        data={filteredCharacters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { character: item })}>
            <View style={styleList.item}>
              <Text style={styleList.itemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default List;

