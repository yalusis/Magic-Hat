import { Dimensions, StyleSheet } from 'react-native';

export const styleCharacterItem = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginHorizontal: 30,
    },
    image: {
      width: Dimensions.get('window').width / 9,
      height: Dimensions.get('window').height / 12,
      marginHorizontal: 15,
    },
    placeholderImage: {
      width: Dimensions.get('window').width / 9,
      height: Dimensions.get('window').height / 12,
      backgroundColor: '#e0e0e0',
      marginHorizontal: 15,
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    attempts: {
      fontSize: 14,
      color: '#666',
    },
    reloadButton: {
      marginHorizontal: 10,
    },
  });
