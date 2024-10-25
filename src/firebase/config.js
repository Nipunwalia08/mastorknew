// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOXDITA6SzoQwTvc4fSu-gxsbgbP_vsT8",
  authDomain: "mastork-form-data.firebaseapp.com",
  projectId: "mastork-form-data",
  storageBucket: "mastork-form-data.appspot.com",
  messagingSenderId: "130319959711",
  appId: "1:130319959711:web:c27a377d57e583e21204aa",
  measurementId: "G-E8N708ZC78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db};