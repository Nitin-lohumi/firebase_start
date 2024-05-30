// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGsuK1tnBoBk7GPbBvwU_dD0NSrNHsEf8",
  authDomain: "fir-frist-6bf5c.firebaseapp.com",
  databaseURL: "https://fir-frist-6bf5c-default-rtdb.firebaseio.com",
  projectId: "fir-frist-6bf5c",
  storageBucket: "fir-frist-6bf5c.appspot.com",
  messagingSenderId: "197230786396",
  appId: "1:197230786396:web:5a598ec1cb0c7390147399",
  measurementId: "G-H7SPFN38DG",
  databaseURL:"https://fir-frist-6bf5c-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);