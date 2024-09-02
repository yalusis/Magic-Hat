import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { MyContext } from '../../../../context/context';
import { styleResetButton } from './styleResetButton';
import { CustomText } from '../../../core/text/custom_text';

const ResetButton = () => {
  const { resetAffiliations } = useContext(MyContext);
  return (
    <TouchableOpacity onPress={resetAffiliations} style={styleResetButton.button}>
      <CustomText fontSize={'14'} fontWeight={'regular'}>Reset</CustomText>
    </TouchableOpacity>
  );
};

export default ResetButton;
