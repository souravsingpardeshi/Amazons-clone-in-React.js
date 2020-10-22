import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyClT-kkmOZbSnZb2Lmm7JnA1_Yyyj0Uq-0",
  authDomain: "souravs-clone.firebaseapp.com",
  databaseURL: "https://souravs-clone.firebaseio.com",
  projectId: "souravs-clone",
  storageBucket: "souravs-clone.appspot.com",
  messagingSenderId: "321675580108",
  appId: "1:321675580108:web:6a43e01f5f741d0f25a869",
  measurementId: "G-1V458PZGJ7"
});

const auth = firebase.auth();

export {auth };