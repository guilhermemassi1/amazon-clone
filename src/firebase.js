import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBeHjVAXgetL6Au-JLaGnZF8rsuzkf6s",
  authDomain: "clone-99da7.firebaseapp.com",
  projectId: "clone-99da7",
  storageBucket: "clone-99da7.appspot.com",
  messagingSenderId: "641240009036",
  appId: "1:641240009036:web:9341d6c2575313fa5ae7e9",
  measurementId: "G-ED6WKS8YLX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
