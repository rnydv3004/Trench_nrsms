// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB43ue2BUtpAYeBTELnskvsBLxb4j93maM",
  authDomain: "test-auth-oacm4q.firebaseapp.com",
  projectId: "test-auth-oacm4q",
  storageBucket: "test-auth-oacm4q.appspot.com",
  messagingSenderId: "1072000031164",
  appId: "1:1072000031164:web:3bd477acc92ff94fa073b9"
};

// Initialize Firebase
export const firebaseAppInitialize = initializeApp(firebaseConfig);