// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, push, onValue } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfJsC_P3W8vsE3kXKtZ0tM4XdmkpcqM8o",
  authDomain: "rent-app-a210b.firebaseapp.com",
  databaseURL: "https://rent-app-a210b-default-rtdb.firebaseio.com",
  projectId: "rent-app-a210b",
  storageBucket: "rent-app-a210b.firebasestorage.app",
  messagingSenderId: "760730745676",
  appId: "1:760730745676:web:2c0084a4b63d1ca0336de9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const db = getDatabase(app);

// export { app, firebaseConfig };
export { db, ref, push, onValue };
