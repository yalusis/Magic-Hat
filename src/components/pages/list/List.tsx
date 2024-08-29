import React from 'react';
import { View, } from 'react-native';
import { ListScreenNavigationProp } from '../../../types/navigationTypes';
import Affiliations from '../../affiliations/Affiliations';

interface ListScreenProps {
    navigation: ListScreenNavigationProp;
}

function ListScreen({ navigation }: ListScreenProps) {
  return (
    <View>
      <Affiliations />
    </View>
  );
}

export default ListScreen;
