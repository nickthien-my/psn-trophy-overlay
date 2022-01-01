// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKX5CEPjdOHYbKzAEWkvaXAUZoRsFCG3Y",
  authDomain: "psn-trophy-database.firebaseapp.com",
  projectId: "psn-trophy-database",
  storageBucket: "psn-trophy-database.appspot.com",
  messagingSenderId: "254886611986",
  appId: "1:254886611986:web:da2ea8f49fbd44eb7b5ccb",
  measurementId: "G-42Y4TR9DHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
