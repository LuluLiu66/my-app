// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoZBjihMVkoAv1VAn4g8s6_vpXyYrDTC4",
  authDomain: "luluapp-ce3b8.firebaseapp.com",
  projectId: "luluapp-ce3b8",
  storageBucket: "luluapp-ce3b8.appspot.com",
  messagingSenderId: "893309105847",
  appId: "1:893309105847:web:396f13fa88e6b94a237f32",
  measurementId: "G-QLLSWT7K53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);