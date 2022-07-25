import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const firebaseApp = firebase.initializeApp({
const firebaseConfig = {
    apiKey: "AIzaSyDZ7gbywg9wFfgEjSjZfvT9HO4HrVcnNHI",
    authDomain: "abobmotors.firebaseapp.com",
    projectId: "abobmotors",
    storageBucket: "abobmotors.appspot.com",
    messagingSenderId: "425000325517",
    appId: "1:425000325517:web:3982450228d7afd6d4edc4"
  };
  
  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
