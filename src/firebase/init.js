// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx71Ne8SjpA2BPKFQSjFoW8Nal8mrhV-Q",
  authDomain: "simularge-69e6b.firebaseapp.com",
  projectId: "simularge-69e6b",
  storageBucket: "simularge-69e6b.appspot.com",
  messagingSenderId: "48610520884",
  appId: "1:48610520884:web:63d1a7ee2140c3d4c3bf61",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db