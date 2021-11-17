import firebase from 'firebase/app'
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyC6oaMqfE50aoZbKdQcjaoWnMSJgYItaRQ",
  authDomain: "boardapp-ba5c7.firebaseapp.com",
  projectId: "boardapp-ba5c7",
  storageBucket: "boardapp-ba5c7.appspot.com",
  messagingSenderId: "110625389148",
  appId: "1:110625389148:web:04e14a1a52bc048c454499",
  measurementId: "G-3FL4975JD5"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;