// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDJcvatAN-lQXKUn0RYw8vWPx8wNY58JIc",
  authDomain: "fir-fb2cf.firebaseapp.com",
  projectId: "fir-fb2cf",
  storageBucket: "fir-fb2cf.appspot.com",
  messagingSenderId: "735935750638",
  appId: "1:735935750638:web:fa1d1995e9727b7e27eeff",
  measurementId: "G-TP85ZRLJDE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth=firebase.auth();

export{ db , auth};