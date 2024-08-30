import { Dimensions, StyleSheet } from 'react-native';

export const styleFilter = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      marginHorizontal: 30,
      borderColor: 'black',
      borderWidth: 3,
    },
    searchInput: {
      flex: 1,
      height: Dimensions.get('window').height / 14,
      paddingHorizontal: 20,
      fontSize: 16,
      color: 'black',
      width: '100%',
    },
    searchIcon: {
      paddingHorizontal: 15,
    },
  });
