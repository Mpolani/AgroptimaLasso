// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  production: true,
  apiKey: "AIzaSyCWF81tcJDd2pg7YD1SgKHFTEGBqrPtCMQ",
  authDomain: "agroptimalasso.firebaseapp.com",
  projectId: "agroptimalasso",
  storageBucket: "agroptimalasso.appspot.com",
  messagingSenderId: "870490558504",
  appId: "1:870490558504:web:3e869bba26468fb360651d",
  measurementId: "G-JTRY1X4GX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);