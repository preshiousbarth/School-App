// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0MC01LqTVvtG2SGFxfqQrCW08XLPge0A",
  authDomain: "elite-institution-8fa76.firebaseapp.com",
  projectId: "elite-institution-8fa76",
  storageBucket: "elite-institution-8fa76.firebasestorage.app",
  messagingSenderId: "487634629061",
  appId: "1:487634629061:web:815f73827b5b0a0af35bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore and export the instance
export const db = getFirestore(app);


// Export auth and provider
export { auth, provider };
