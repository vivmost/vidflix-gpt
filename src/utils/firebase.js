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
  authDomain: "netflixgpt-f16e7.firebaseapp.com",
  projectId: "netflixgpt-f16e7",
  storageBucket: "netflixgpt-f16e7.appspot.com",
  messagingSenderId: "716615710548",
  appId: "1:716615710548:web:f180a9d75d48b9148a3ac1",
  measurementId: "G-KHXDLFNQ94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
