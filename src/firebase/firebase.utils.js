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

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return;

const userRef =firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists) {
 const {displayName, email} = userAuth;
 const createdAt = new Date();

 try {
await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
});
 } catch (error) {
console.log('error creating user', error.message);
 }
}
return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

const batch = firestore.batch();
objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, obj);
 });

 return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
 const transformedCollection = collections.docs.map(doc => {
 const { title, items } = doc.data();

 return {
   routeName: encodeURI(title.toLowerCase()),
   id: doc.id,
   title,
   items
 };
 });

return transformedCollection.reduce((accumulator, collection) => {
 accumulator[ collection.title.toLowerCase()] = collection;
 return accumulator;
} , {});

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
