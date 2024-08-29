import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainDrawerAndRouter from './src/components/navigation/main_drawer_and_router';
import BootSplash from 'react-native-bootsplash';
import { getRandomCharacterData } from './src/constants/api';
import { MyContext, MyProvider } from './src/context/context';

function App(): React.JSX.Element {
  const { addCharacter } = useContext(MyContext);

  useEffect(() => {
    const init = async () => {
      const characterData = await getRandomCharacterData();
      addCharacter(characterData);
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, [addCharacter]);
  return (
    <SafeAreaProvider>
      <MyProvider>
        <MainDrawerAndRouter />
      </MyProvider>
    </SafeAreaProvider>
  );
}

export default App;

