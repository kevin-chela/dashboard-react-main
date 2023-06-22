// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, browserSessionPersistence } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA3KDcGwMOC91uHl7VRJEf_GyT_ZtUubBg",
  authDomain: "manhattandessert-646e2.firebaseapp.com",
  projectId: "manhattandessert-646e2",
  storageBucket: "manhattandessert-646e2.appspot.com",
  messagingSenderId: "71761988693",
  appId: "1:71761988693:web:a7e1fa46ddf06e7f9f18dc",
  measurementId: "G-NC9TTVDH8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, { persistence: browserSessionPersistence });
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };