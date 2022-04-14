import { firebase } from '@react-native-firebase/database';

export const database = firebase
  .app()
  .database('https://weatherapp-2b7d3-default-rtdb.firebaseio.com/');
