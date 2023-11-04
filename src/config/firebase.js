import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzZiLeKRXVi4lQWJMMKjRrZcUZvp9BY3E",
  authDomain: "proyecto-react-4e7e0.firebaseapp.com",
  projectId: "proyecto-react-4e7e0",
  storageBucket: "proyecto-react-4e7e0.appspot.com",
  messagingSenderId: "835108931654",
  appId: "1:835108931654:web:f7a5b31efe1fdbea36e247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)