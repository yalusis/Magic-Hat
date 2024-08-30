import axios from 'axios';
import { Character } from '../types/character';

export const getRandomCharacterData = async (): Promise<Character | null> => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    const characters: Character[] = response.data;
    if (characters.length > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      return characters[randomIndex];
    } else {
      throw new Error('No characters found');
    }
  } catch (error) {
    console.error('Error fetching character data:', error);
    return null;
  }
};
