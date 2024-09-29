// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey_firebase}`,
  authDomain: "vidflixgpt-83535.firebaseapp.com",
  projectId: "vidflix-83535",
  storageBucket: "vidflixgpt-83535.appspot.com",
  messagingSenderId: "15861724002",
  appId: "1:15861724002:web:dbcb0e6e57b8fcac8d323b",
  measurementId: "G-SNFC6M26VX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
