import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyBgIhwhNrAL86N3PeuYLwRkkbVaI7QIBbk",
        authDomain: "crwn-db-c0d8b.firebaseapp.com",
        projectId: "crwn-db-c0d8b",
        storageBucket: "crwn-db-c0d8b.appspot.com",
        messagingSenderId: "309939383132",
        appId: "1:309939383132:web:3b758f4c2b408cab4f6f99",
        measurementId: "G-ENHTYLQJDK"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;