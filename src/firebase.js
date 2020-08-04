import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDR3yhSOThriof9p8gh8auDlOzVdaJf8i8',
  authDomain: 'lmucon.firebaseapp.com',
  databaseURL: 'https://lmucon.firebaseio.com',
  projectId: 'lmucon',
  storageBucket: 'lmucon.appspot.com',
  messagingSenderId: '718994426478',
  appId: '1:718994426478:web:9b18a7c53c3f24c3b8f47f',
  measurementId: 'G-771FSQ628Y'
})
// Initialize Firebase
const db = firebaseApp.firestore()

export default db
