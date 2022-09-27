import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt8m1B_2JeQ_dj6XG-7eFRw3Hg824faE8",
  authDomain: "blog-e08d4.firebaseapp.com",
  databaseURL: "https://blog-e08d4-default-rtdb.firebaseio.com",
  projectId: "blog-e08d4",
  storageBucket: "blog-e08d4.appspot.com",
  messagingSenderId: "176117707377",
  appId: "1:176117707377:web:7bedfd7f8e945ed71aa1d0",
  measurementId: "G-9YB539E8Y2"
};

  firebase.initializeApp(firebaseConfig);


  const db=firebase.firestore();

  export {db}