import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import { MyContext } from '../../../context/context';
import { ListScreenNavigationProp } from '../../../types/navigationTypes';
import Affiliations from '../../affiliations/Affiliations';
import { styleList } from './styleList';
import Filter from './components/Filter/Filter';
import CharacterItem from './components/CharacterItem/CharacterItem';
import { ScrollView } from 'react-native-gesture-handler';

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
    <ScrollView style={styleList.container}>
      <Affiliations />
      <Filter filter={filter} setFilter={setFilter}/>
      <FlatList
        data={[...filteredCharacters].reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CharacterItem
            character={item}
            onPress={() => navigation.navigate('Details', { character: item })}
          />
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default List;

