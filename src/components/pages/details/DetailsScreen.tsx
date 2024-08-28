import React from 'react';
import { View, Text, Button } from 'react-native';
import { DetailsScreenNavigationProp } from '../../../constants/types';

interface DetailsScreenProps {
    navigation: DetailsScreenNavigationProp;
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

export default DetailsScreen;
