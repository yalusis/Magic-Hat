import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styleHouseButtons } from './styleHouseButtons';
import { CustomText } from '../../../../core/text/custom_text';

interface HouseButtonsProps {
  onButtonPress: (house: string) => void;
}

function HouseButtons({ onButtonPress }: HouseButtonsProps) {
  return (
    <View style={styleHouseButtons.container}>
      <View style={styleHouseButtons.row}>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Gryffindor')}>
          <Image source={require('../../../../../assets/images/Gryffindor.png')} style={styleHouseButtons.image} resizeMode="contain" />
          <CustomText fontSize={'16'} fontWeight={'bold'}>Gryffindor</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Slytherin')}>
          <Image source={require('../../../../../assets/images/Slytherin.png')} style={styleHouseButtons.image} resizeMode="contain" />
          <CustomText fontSize={'16'} fontWeight={'bold'}>Slytherin</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styleHouseButtons.row}>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Ravenclaw')}>
          <Image source={require('../../../../../assets/images/Ravenclaw.png')} style={styleHouseButtons.image} resizeMode="contain" />
          <CustomText fontSize={'16'} fontWeight={'bold'}>Ravenclaw</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styleHouseButtons.button} onPress={() => onButtonPress('Hufflepuff')}>
          <Image source={require('../../../../../assets/images/Hufflepuff.png')} style={styleHouseButtons.image} resizeMode="contain" />
          <CustomText fontSize={'16'} fontWeight={'bold'}>Hufflepuff</CustomText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styleHouseButtons.fullWidthButton} onPress={() => onButtonPress('')}>
        <CustomText fontSize={'16'} fontWeight={'bold'}>Not in House</CustomText>
      </TouchableOpacity>
    </View>
  );
}

export default HouseButtons;
