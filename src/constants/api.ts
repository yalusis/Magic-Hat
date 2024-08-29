import axios from 'axios';

export const getRandomCharacterData = async () => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    const characters = response.data;
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
