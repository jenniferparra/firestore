// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAC2nEWJKq80Ms1h995d35-Xo0yJtAV5o",
  authDomain: "firestore-c42d9.firebaseapp.com",
  projectId: "firestore-c42d9",
  storageBucket: "firestore-c42d9.appspot.com",
  messagingSenderId: "473022667580",
  appId: "1:473022667580:web:4e54e9dda0dcdad75d5c39",
  measurementId: "G-ERS3YNFPQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
