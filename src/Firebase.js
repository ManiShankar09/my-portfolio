// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65tLZOJIgR_F-DEWbHXeBT4uIT4qXOFM",
  authDomain: "portfolio-afa6a.firebaseapp.com",
  projectId: "portfolio-afa6a",
  storageBucket: "portfolio-afa6a.appspot.com",
  messagingSenderId: "398423940050",
  appId: "1:398423940050:web:d43920ff78f18fbfc6860b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);