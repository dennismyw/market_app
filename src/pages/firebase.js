// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
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
const storage = getStorage(app);
