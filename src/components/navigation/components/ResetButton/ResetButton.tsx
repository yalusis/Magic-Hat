import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MyContext } from '../../../../context/context';
import { styleResetButton } from './styleResetButton';

const ResetButton = () => {
  const { resetAffiliations } = useContext(MyContext);
  return (
    <TouchableOpacity onPress={resetAffiliations} style={styleResetButton.button}>
      <Text style={styleResetButton.text}>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetButton;
