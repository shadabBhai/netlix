// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFiITMYWGKU6wjFgEozgd_Fshh8D6WW7I",
  authDomain: "netlixgpt-e5e9a.firebaseapp.com",
  projectId: "netlixgpt-e5e9a",
  storageBucket: "netlixgpt-e5e9a.appspot.com",
  messagingSenderId: "917137969528",
  appId: "1:917137969528:web:0b95863d0e29259e58b88d",
  measurementId: "G-MLMMDJPC3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
