import { Dimensions, StyleSheet } from 'react-native';

export const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    backgroundColor: 'white',
  },
  image: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 4,
    marginRight: 20,
  },
  placeholderImage: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 4,
    backgroundColor: '#e0e0e0',
    marginRight: 20,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  deniedBlock: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width / 2.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 5,
  },
  deniedText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});

