// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQXFUNFNIXwiul2OCXSuoUoP9P4sQAPew",
  authDomain: "react-cursos-4cb1f.firebaseapp.com",
  projectId: "react-cursos-4cb1f",
  storageBucket: "react-cursos-4cb1f.appspot.com",
  messagingSenderId: "318294722417",
  appId: "1:318294722417:web:27c9133995bf155962d8d0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth =getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);