// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDt8GYgxBLN46VrO26yRZTaVQsa0Smchv8",
  authDomain: "impulseedutask.firebaseapp.com",
  projectId: "impulseedutask",
  storageBucket: "impulseedutask.appspot.com",
  messagingSenderId: "480962541368",
  appId: "1:480962541368:web:a91faf885df02e60c5f3cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
