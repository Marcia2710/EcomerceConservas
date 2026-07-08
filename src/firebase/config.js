import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjH5uuJTsnDAjq8qWQGqkEEVKq0gahFZY",
  authDomain: "tienda-online-9bddb.firebaseapp.com",
  projectId: "tienda-online-9bddb",
  storageBucket: "tienda-online-9bddb.firebasestorage.app",
  messagingSenderId: "907106038637",
  appId: "1:907106038637:web:a9f987f131421ce3276064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const db = getFirestore(app);
