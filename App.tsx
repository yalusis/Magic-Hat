import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainDrawerAndRouter from './src/components/navigation/main_drawer_and_router';
import BootSplash from 'react-native-bootsplash';
import { MyContext, MyProvider } from './src/context/context';
import { getRandomCharacterData } from './src/api/api';
import { Character } from './src/types/character';

function App(): React.JSX.Element {
  const { addCharacter } = useContext(MyContext);

  useEffect(() => {
    const init = async () => {
      try {
        const characterData: Character | null = await getRandomCharacterData();
        if (characterData) {
          addCharacter(characterData);
        } else {
          console.error('No character data received');
        }
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <SafeAreaProvider>
      <MainDrawerAndRouter />
    </SafeAreaProvider>
  );
}

export default () => (
  <MyProvider>
    <App />
  </MyProvider>
);

