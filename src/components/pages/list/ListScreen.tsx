import React from 'react';
import { View, Text, Button } from 'react-native';
import { ListScreenNavigationProp } from '../../../constants/types';

interface ListScreenProps {
    navigation: ListScreenNavigationProp;
}

function ListScreen({ navigation }: ListScreenProps) {
  return (
    <View>
      <Text>List Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default ListScreen;
