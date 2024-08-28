import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainDrawerAndRouter from './src/components/navigation/main_drawer_and_router';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <MainDrawerAndRouter />
    </SafeAreaProvider>
  );
}

export default App;
