import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLklcsYVzGTipb55aOWtJRwwN1w9AbWpY",
    authDomain: "crwn-db-2206c.firebaseapp.com",
    databaseURL: "https://crwn-db-2206c.firebaseio.com",
    projectId: "crwn-db-2206c",
    storageBucket: "crwn-db-2206c.appspot.com",
    messagingSenderId: "979358897937",
    appId: "1:979358897937:web:83ba3ac80f41f624341eb0",
    measurementId: "G-33FB6BJ7P8"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;