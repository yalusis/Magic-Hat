import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ExtendedCharacter } from './extendedCharacter';

export type ListStackParamList = {
  List: undefined;
  Details: { character: ExtendedCharacter };
};

export type HomeStackParamList = {
  'Home': { character?: ExtendedCharacter };
};

export type RootStackParamList = {
  'Home': { character: ExtendedCharacter };
};

export type ListScreenNavigationProp = StackNavigationProp<ListStackParamList, 'List'>;

export type DetailsScreenRouteProp = RouteProp<ListStackParamList, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<ListStackParamList, 'Details'>;

export type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

export type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
