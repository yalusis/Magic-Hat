import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Text> Hello World </Text>
    </SafeAreaProvider>
  );
}

export default App;
