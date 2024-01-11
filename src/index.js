import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRArN67vneQRzvbJu1eHTE6fcWhexPnDU",
  authDomain: "bruilt.firebaseapp.com",
  projectId: "bruilt",
  storageBucket: "bruilt.appspot.com",
  messagingSenderId: "417852552250",
  appId: "1:417852552250:web:3d2780c933c0291707f103",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

const storage = getStorage(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const imageDb = getStorage(app);
reportWebVitals();
