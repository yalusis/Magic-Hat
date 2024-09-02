import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Person from '../../assets/rn-svg/person';
import { stylePlaceholderImage } from './stylePlaceholderImage';

interface PlaceholderImageProps {
  style?: StyleProp<ViewStyle>;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ style }) => {
  return (
    <View style={[stylePlaceholderImage.placeholderImage, style]}>
       <Person/>
    </View>
  );
};

export default PlaceholderImage;
