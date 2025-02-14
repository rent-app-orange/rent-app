import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfJsC_P3W8vsE3kXKtZ0tM4XdmkpcqM8o",
  authDomain: "rent-app-a210b.firebaseapp.com",
  databaseURL: "https://rent-app-a210b-default-rtdb.firebaseio.com",
  projectId: "rent-app-a210b",
  storageBucket: "rent-app-a210b.appspot.com",
  messagingSenderId: "760730745676",
  googleMapsApiKey: "AIzaSyChiqY4rfnRHf1dYwZDRI6OmNBcSjxzQjg" ,

  appId: "1:760730745676:web:2c0084a4b63d1ca0336de9",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
export { app, firebaseConfig };
export const auth = getAuth(app);
export const database = getDatabase(app);
