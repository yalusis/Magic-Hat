import { Dimensions, StyleSheet } from 'react-native';

export const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    characterContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    image: {
      width: Dimensions.get('window').width / 2.5,
      height: Dimensions.get('window').height / 4,
      marginBottom: 10,
    },
    placeholderImage: {
      width: Dimensions.get('window').width / 2.5,
      height: Dimensions.get('window').height / 4,
      backgroundColor: '#e0e0e0',
      marginBottom: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
});
