import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7DENKbaTdcHqmrSA_ePeEhD_yxAMgrik",
    authDomain: "comic-store-a97be.firebaseapp.com",
    databaseURL: "https://comic-store-a97be.firebaseio.com",
    projectId: "comic-store-a97be",
    storageBucket: "comic-store-a97be.appspot.com",
    messagingSenderId: "186955654841",
    appId: "1:186955654841:web:9ae64346b86504721e5d68",
    measurementId: "G-5698NH4EKM"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;