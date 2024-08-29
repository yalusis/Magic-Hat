import React from 'react';
import { View, Text, Button } from 'react-native';
import { DetailsScreenNavigationProp } from '../../../types/navigationTypes';

interface DetailsScreenProps {
    navigation: DetailsScreenNavigationProp;
}

function DetailsScreen({ navigation }: DetailsScreenProps){
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

export default DetailsScreen;
