import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/';

const firebaseConfig = {
  apiKey: "AIzaSyDPJ6V9ur7tHh5mvFro9quJ5Oxi5E83AS0",
  authDomain: "hotel-71469.firebaseapp.com",
  projectId: "hotel-71469",
  storageBucket: "hotel-71469.appspot.com",
  messagingSenderId: "68834706787",
  appId: "1:68834706787:web:fa185a96035d40ae6c3f56",
  measurementId: "G-LEG5S06MXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log(db);
