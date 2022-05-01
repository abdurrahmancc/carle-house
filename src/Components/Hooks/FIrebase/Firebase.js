// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgkAQn59Wn5xrcixWX4VqhyxI3KHoSjgQ",
  authDomain: "carle-warehouse.firebaseapp.com",
  projectId: "carle-warehouse",
  storageBucket: "carle-warehouse.appspot.com",
  messagingSenderId: "502384387327",
  appId: "1:502384387327:web:0c91e3c13f0045481f58ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
