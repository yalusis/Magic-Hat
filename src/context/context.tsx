import React, { ReactNode, createContext, useState } from 'react';
import { Character } from '../types/character';
import { ExtendedCharacter } from '../types/extendedCharacter';

interface MyContextType {
  allCharacters: ExtendedCharacter[];
  total: number;
  success: number;
  failed: number;
  addCharacter: (character: Character) => ExtendedCharacter | undefined;
  removeCharacter: (characterID: string) => void;
  updateAffiliations: (characterID: string, isSuccess: boolean) => void;
  resetAffiliations: () => void;
}

export const MyContext = createContext<MyContextType>({
  allCharacters: [],
  total: 0,
  success: 0,
  failed: 0,
  addCharacter: () => { throw new Error('Function not implemented.'); },
  removeCharacter: () => {},
  updateAffiliations: () => {},
  resetAffiliations: () => {},
});

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [allCharacters, setAllCharacters] = useState<ExtendedCharacter[]>([]);
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(0);
  const [failed, setFailed] = useState(0);

  const isCharacterAlreadyAdded = (character: Character) => {
    return allCharacters.some((item) => item.id === character.id);
  };

  const addCharacter = (character: Character) => {
    if (!isCharacterAlreadyAdded(character)) {
      const characterWithAttempts: ExtendedCharacter = {
        ...character,
        attempts: 0,
        guessed: false,
      };
      setAllCharacters((currData) => [characterWithAttempts, ...currData]);
      return characterWithAttempts;
    } else {
      return allCharacters.find((item) => item.id === character.id);
    }
  };

  const removeCharacter = (characterID: string) => {
    setAllCharacters((currData) => currData.filter((item) => item.id !== characterID));
  };


  const updateAffiliations = (characterID: string, isSuccess: boolean) => {
    setAllCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === characterID
          ? {
              ...character,
              attempts: character.attempts + 1,
              guessed: isSuccess,
            }
          : character
      )
    );

    setTotal((prevTotal) => prevTotal + 1);

    if (isSuccess) {
      setSuccess((prevSuccess) => prevSuccess + 1);
    } else {
      setFailed((prevFailed) => prevFailed + 1);
    }
  };

  const resetAffiliations = () => {
    setTotal(0);
    setSuccess(0);
    setFailed(0);
    setAllCharacters((prevCharacters) =>
      prevCharacters.map((character) => ({ ...character, attempts: 0, guessed: false }))
    );
  };

  return (
    <MyContext.Provider value={{
      allCharacters,
      total,
      success,
      failed,
      addCharacter,
      removeCharacter,
      updateAffiliations,
      resetAffiliations,
    }}>
      {children}
    </MyContext.Provider>
  );
};
