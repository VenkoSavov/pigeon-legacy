// JavaScript
// src.firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAa0jZpfD6qsfNp9lLKC3ynmviye0qW1e8",
    authDomain: "pigeon-legacy.firebaseapp.com",
    databaseURL: "https://pigeon-legacy-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pigeon-legacy",
    storageBucket: "pigeon-legacy.appspot.com",
    messagingSenderId: "781759789758",
    appId: "1:781759789758:web:b856c9e78dd55d2621fcef",
    measurementId: "G-X3T8LV2673"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, firebase };