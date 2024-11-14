// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMGYSfaDBSvxdM3QV3KzuO2ftSkYpTTcE",
  authDomain: "react-pokemon-ce394.firebaseapp.com",
  projectId: "react-pokemon-ce394",
  storageBucket: "react-pokemon-ce394.firebasestorage.app",
  messagingSenderId: "900580878971",
  appId: "1:900580878971:web:5b85b03fe7e8933d3e90de",
  measurementId: "G-2RZ3TRPL9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;