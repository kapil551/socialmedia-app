// import firebase
import Firebase from 'firebase/compat/app';
// import firebase auth
import 'firebase/compat/auth';
// import firebase storage
import 'firebase/compat/storage';
// import firebase firestore
import 'firebase/compat/firestore';

import { FieldValue } from "firebase/firestore";

// here i want to import the seed.js file
// import { seedDatabase } from '../seed';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbIhaPDFBA2ikp_LYSRmjl1hQUYk9cgcU",
    authDomain: "socialmedia-app-8e7e2.firebaseapp.com",
    projectId: "socialmedia-app-8e7e2",
    storageBucket: "socialmedia-app-8e7e2.appspot.com",
    messagingSenderId: "56292095368",
    appId: "1:56292095368:web:c53416dabae75e6bbbb63d"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// console.log(db);

// here is where I want to call the seed.js file (Only ONCE!)
// seedDatabase(firebase);

// test the firebase
console.log("firebase", firebase);

export { firebase, FieldValue };
