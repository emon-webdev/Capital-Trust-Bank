// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,



  // apiKey: "AIzaSyDrG9kqOMINdvXAoxGjt8JDpXGHcIufxVQ",
  // authDomain: "capital-trust-bank-ee791.firebaseapp.com",
  // projectId: "capital-trust-bank-ee791",
  // storageBucket: "capital-trust-bank-ee791.appspot.com",
  // messagingSenderId: "709974636356",
  // appId: "1:709974636356:web:01388e1ece431d08d98911",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;