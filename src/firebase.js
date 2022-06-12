import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCo4QuM0lZB-2FTk1U7UpdiZKS9flnHRo4",
    authDomain: "clone-264ff.firebaseapp.com",
    projectId: "clone-264ff",
    storageBucket: "clone-264ff.appspot.com",
    messagingSenderId: "1030525770326",
    appId: "1:1030525770326:web:990e813e4989cbe2c7f9f7",
    measurementId: "G-SW88CHCG8T"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export { db, auth }