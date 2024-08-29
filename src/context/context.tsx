import React, { ReactNode, createContext, useState } from 'react';

interface MyContextType {
  allCharacters: any[];
  total: number;
  success: number;
  failed: number;
  addCharacter: (character: any) => void;
  removeCharacter: (characterID: string) => void;
  updateAffiliations: (isSuccess: boolean) => void;
  resetAffiliations: () => void;
}

export const MyContext = createContext<MyContextType>({
  allCharacters: [],
  total: 0,
  success: 0,
  failed: 0,
  addCharacter: () => {},
  removeCharacter: () => {},
  updateAffiliations: () => {},
  resetAffiliations: () => {},
});

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [allCharacters, setAllCharacters] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(0);
  const [failed, setFailed] = useState(0);

  const isCharacterAlreadyAdded = (character: any) => {
    return allCharacters.some((item) => item.id === character.id);
  };

  const addCharacter = (character: any) => {
    !isCharacterAlreadyAdded(character) && setAllCharacters((currData) => [character, ...currData]);
  };

  const removeCharacter = (characterID: string) => {
    setAllCharacters((currData) => currData.filter((item) => item.id !== characterID));
  };

  const updateAffiliations = (isSuccess: boolean) => {
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
  };

  return (
    <MyContext.Provider value={{ allCharacters, total, success, failed, addCharacter, removeCharacter, updateAffiliations, resetAffiliations }}>
      {children}
    </MyContext.Provider>
  );
};
