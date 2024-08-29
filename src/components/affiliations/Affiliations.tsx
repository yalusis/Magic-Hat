import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { MyContext } from '../../context/context';
import { styleAffiliations } from './styleAffiliations';

function Affiliations() {
  const { total, success, failed } = useContext(MyContext);

  return (
    <View style={styleAffiliations.container}>
      <View style={styleAffiliations.box}>
        <Text style={styleAffiliations.textNumber}>{total}</Text>
        <Text style={styleAffiliations.text}>Total</Text>
      </View>
      <View style={styleAffiliations.box}>
        <Text style={styleAffiliations.textNumber}>{success}</Text>
        <Text style={styleAffiliations.text}>Success</Text>
      </View>
      <View style={styleAffiliations.box}>
        <Text style={styleAffiliations.textNumber}>{failed}</Text>
        <Text style={styleAffiliations.text}>Failed</Text>
      </View>
    </View>
  );
}

export default Affiliations;
