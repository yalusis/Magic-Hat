import { Dimensions, StyleSheet } from 'react-native';

export const styleList = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
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
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    itemText: {
      fontSize: 16,
    },
  });
