// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "game1-90915.firebaseapp.com",
  projectId: "game1-90915",
  storageBucket: "game1-90915.appspot.com",
  messagingSenderId: "339322410704",
  appId: "1:339322410704:web:2e7d910bad3003467270d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
