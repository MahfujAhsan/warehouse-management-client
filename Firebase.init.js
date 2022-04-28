// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Milnard-Perfumer Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmiHrz4QsI5IoWM9DTzenRE1rjDo2KANM",
  authDomain: "molinard-perfumer.firebaseapp.com",
  projectId: "molinard-perfumer",
  storageBucket: "molinard-perfumer.appspot.com",
  messagingSenderId: "1000244012022",
  appId: "1:1000244012022:web:e9a6346f933efbce5b5dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app();

export default auth;

