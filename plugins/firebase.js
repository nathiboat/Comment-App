import * as firebase from 'firebase'
import 'firebase/database'

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: 'AIzaSyBKH_Taa_G5f0O1_uIYlKmNmcfoqTy5k-4',
    authDomain: "chatbox-1c69c.firebaseapp.com",
    databaseURL: "https://chatbox-1c69c.firebaseio.com",
    projectId: "chatbox-1c69c",
    storageBucket: "chatbox-1c69c.appspot.com",
    messagingSenderId: "670349398952"
  })
}

export const db = firebase.database()

export default firebase
