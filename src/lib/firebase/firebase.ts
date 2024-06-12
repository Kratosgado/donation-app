// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCKFFHGdQJpaDeI5ngbF-DFIxdZqKYfxHQ",
  authDomain: "donation-app-afd97.firebaseapp.com",
  projectId: "donation-app-afd97",
  storageBucket: "donation-app-afd97.appspot.com",
  messagingSenderId: "1064439147321",
  appId: "1:1064439147321:web:c83d7b640868cd1c88d6e8",
  measurementId: "G-DVQ6FXSEEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };