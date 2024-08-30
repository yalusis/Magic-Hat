import { Character } from './character';

export interface ExtendedCharacter extends Character {
    attempts: number;
    guessed: boolean
}
