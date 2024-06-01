// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Kup66Ri4DHetL7fxSfjSYDK4NuCjIWA",
  authDomain: "whats-app-clone-2556c.firebaseapp.com",
  projectId: "whats-app-clone-2556c",
  storageBucket: "whats-app-clone-2556c.appspot.com",
  messagingSenderId: "1060915953612",
  appId: "1:1060915953612:web:a6bb26ea6e43feb791a769",
  measurementId: "G-8BBG7Y1BZR",
};

try {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
} catch (error) {
  console.log("Error:", error);
}

// export const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

// export const auth = getAuth(app);

// export const storage = storage(app);
