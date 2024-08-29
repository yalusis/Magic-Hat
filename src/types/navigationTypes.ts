import { StackNavigationProp } from '@react-navigation/stack';

export type ListStackParamList = {
  List: undefined;
  Details: undefined;
};

export type ListScreenNavigationProp = StackNavigationProp<ListStackParamList, 'List'>;
export type DetailsScreenNavigationProp = StackNavigationProp<ListStackParamList, 'Details'>;
