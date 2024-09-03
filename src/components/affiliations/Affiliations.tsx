import React, { useContext } from 'react';
import { View } from 'react-native';
import { MyContext } from '../../context/context';
import { styleAffiliations } from './styleAffiliations';
import { CustomText } from '../core/text/custom_text';

function Affiliations() {
  const { total, success, failed } = useContext(MyContext);

  return (
    <View style={styleAffiliations.container}>
      <View style={styleAffiliations.box}>
        <CustomText fontSize={'24'} fontWeight={'bold'}>{total}</CustomText>
        <CustomText fontSize={'14'} fontWeight={'medium'}>Total</CustomText>
      </View>
      <View style={styleAffiliations.box}>
        <CustomText fontSize={'24'} fontWeight={'bold'}>{success}</CustomText>
        <CustomText fontSize={'14'} fontWeight={'medium'}>Success</CustomText>
      </View>
      <View style={styleAffiliations.box}>
        <CustomText fontSize={'24'} fontWeight={'bold'}>{failed}</CustomText>
        <CustomText fontSize={'14'} fontWeight={'medium'}>Failed</CustomText>
      </View>
    </View>
  );
}

export default Affiliations;
