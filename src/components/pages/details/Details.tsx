import React from 'react';
import { View, Text } from 'react-native';
import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from '../../../types/navigationTypes';

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

function Details({ navigation, route }: DetailsScreenProps){
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

export default Details;
