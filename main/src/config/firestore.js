// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDw4bVGj8cC1TacDIY_zRvMUJo45LcKQ4",
  authDomain: "ecommerce-a57a1.firebaseapp.com",
  projectId: "ecommerce-a57a1",
  storageBucket: "ecommerce-a57a1.appspot.com",
  messagingSenderId: "192861648205",
  appId: "1:192861648205:web:8cc1b3f438cb22723b3304",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const cards = getFirestore(app);
export const cart = getFirestore(app);
