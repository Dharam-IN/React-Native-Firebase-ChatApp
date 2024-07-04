// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw9rqsfkRko1f4f9tZMGq-OIKy6rAlyFs",
  authDomain: "react-native-firebase-chatapp.firebaseapp.com",
  projectId: "react-native-firebase-chatapp",
  storageBucket: "react-native-firebase-chatapp.appspot.com",
  messagingSenderId: "337857139298",
  appId: "1:337857139298:web:9bc07636df4341c8ad773b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)

export const userRef = collection(db, 'users')
export const roomRef = collection(db, 'rooms')