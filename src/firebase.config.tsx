// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaXXopt_EBMG_nvftyGgHn8eTmlHf3kEY",
  authDomain: "online-job-portal-55658.firebaseapp.com",
  projectId: "online-job-portal-55658",
  storageBucket: "online-job-portal-55658.firebasestorage.app",
  messagingSenderId: "599209586913",
  appId: "1:599209586913:web:2e16ec51d4f1383b98c7a0",
  measurementId: "G-JDK8G33ZXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};