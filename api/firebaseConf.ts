import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "limoai.firebaseapp.com",
  projectId: "limoai",
  storageBucket: "limoai.appspot.com",
  messagingSenderId: "903047285464",
  appId: "1:903047285464:web:1f6e1a7fe2b66c1cc765ad",
  measurementId: "G-Q6PX87HDKS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
