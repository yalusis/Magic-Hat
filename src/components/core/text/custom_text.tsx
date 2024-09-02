/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

export interface AppTextInterface extends TextProps {
  fontSize?: fontSizeTypes;
  fontWeight?: fontWeightTypes;
  toUpperCase?: boolean;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<AppTextInterface> = ({
  fontSize = '18',
  fontWeight = 'regular',
  toUpperCase = false,
  color = 'black',
  style,
  ...rest
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        fontSizeStyle[fontSize],
        fontWeightStyle[fontWeight],
        { textTransform: toUpperCase ? 'uppercase' : 'none', color },
        style,
      ]}
      {...rest}
    />
  );
};

const fontSizeStyle = StyleSheet.create({
  '36': {
    fontSize: 36,
  },
  '32': {
    fontSize: 32,
  },
  '24': {
    fontSize: 24,
  },
  '20': {
    fontSize: 20,
  },
  '18': {
    fontSize: 18,
  },
  '16': {
    fontSize: 16,
  },
  '14': {
    fontSize: 14,
  },
  '12': {
    fontSize: 12,
  },
  '10': {
    fontSize: 10,
  },
});

const fontWeightStyle = StyleSheet.create({
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
  medium: {
    fontFamily: 'Montserrat-Medium',
  },
});

type fontSizeTypes = '36' | '32' | '24' |'20'| '18' | '16' | '14' | '12' | '10';

type fontWeightTypes = 'regular' | 'bold' | 'medium';
