import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Character } from './character';

export type ListStackParamList = {
  List: undefined;
  Details: { character: Character };
};
export type ListScreenNavigationProp = StackNavigationProp<ListStackParamList, 'List'>;

export type DetailsScreenRouteProp = RouteProp<ListStackParamList, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<ListStackParamList, 'Details'>;
