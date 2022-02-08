// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_SgIG6iUuIz3cmmlzgjkwUzBdeV4zZF0",
  authDomain: "movier-react-ts.firebaseapp.com",
  projectId: "movier-react-ts",
  storageBucket: "movier-react-ts.appspot.com",
  messagingSenderId: "34914144968",
  appId: "1:34914144968:web:8bbf1e4f02beb25c7c4bfd",
  measurementId: "G-9M2EMLFH6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);