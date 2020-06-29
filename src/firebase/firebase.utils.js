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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;