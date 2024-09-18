// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9yvJtTkPCfc8dG8CZSSDwZdtoZ3v9RyY",
  authDomain: "mylms-1fafa.firebaseapp.com",
  projectId: "mylms-1fafa",
  storageBucket: "mylms-1fafa.appspot.com",
  messagingSenderId: "517699729406",
  appId: "1:517699729406:web:b5f1aa6c76fb55fa0632af",
  measurementId: "G-3YV0SN8T72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
