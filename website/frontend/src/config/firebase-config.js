import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7t-3P9GATrfB_wpJSaBBkszb7ov6tYqo",
  authDomain: "vision-voice--test.firebaseapp.com",
  projectId: "vision-voice--test",
  storageBucket: "vision-voice--test.appspot.com",
  messagingSenderId: "27023567756",
  appId: "1:27023567756:web:ecf96149a1e3318bd284a9",
  measurementId: "G-YQ00QDJ1RQ"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const database=firebase.firestore()
export default firebase;
export {database};