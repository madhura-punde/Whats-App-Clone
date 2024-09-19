import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Kup66Ri4DHetL7fxSfjSYDK4NuCjIWA",
  authDomain: "whats-app-clone-2556c.firebaseapp.com",
  projectId: "whats-app-clone-2556c",
  storageBucket: "whats-app-clone-2556c.appspot.com",
  messagingSenderId: "1060915953612",
  appId: "1:1060915953612:web:a6bb26ea6e43feb791a769",
  measurementId: "G-8BBG7Y1BZR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
