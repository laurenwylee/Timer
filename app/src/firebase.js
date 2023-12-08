// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAicYZinrTBzZsP-NSWyYrbTbX3BJ2hdIg",
  authDomain: "unitup-cc6ae.firebaseapp.com",
  projectId: "unitup-cc6ae",
  storageBucket: "unitup-cc6ae.appspot.com",
  messagingSenderId: "929941803711",
  appId: "1:929941803711:web:d5c37ead1870fbea3b2c0a",
  measurementId: "G-W8G5C1RCRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
