import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styleHouseButtons } from './styleHouseButtons';

interface HouseButtonsProps {
  onButtonPress: (house: string) => void;
}

function HouseButtons({ onButtonPress }: HouseButtonsProps) {
  return (
    <View style={styleHouseButtons.container}>
      <View style={styleHouseButtons.row}>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Gryffindor')}>
          <Text style={styleHouseButtons.buttonText}>Gryffindor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Slytherin')}>
          <Text style={styleHouseButtons.buttonText}>Slytherin</Text>
        </TouchableOpacity>
      </View>
      <View style={styleHouseButtons.row}>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Ravenclaw')}>
          <Text style={styleHouseButtons.buttonText}>Ravenclaw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Hufflepuff')}>
          <Text style={styleHouseButtons.buttonText}>Hufflepuff</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styleHouseButtons.fullWidthButton} onPress={() => onButtonPress('')}>
        <Text style={styleHouseButtons.buttonText}>Not in House</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HouseButtons;
