import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styleFilter } from './styleFilter';

interface FilterProps {
  filter: string;
  setFilter: (text: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <View style={styleFilter.searchContainer}>
      <TextInput
        style={styleFilter.searchInput}
        placeholder="Filter characters..."
        value={filter}
        onChangeText={setFilter}
        placeholderTextColor="black"
      />
      <Icon name="search" size={20} color="black" style={styleFilter.searchIcon} />
    </View>
  );
};

export default Filter;
