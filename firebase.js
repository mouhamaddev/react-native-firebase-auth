import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDux7pNBfpNC0-5jswj4M9tmihz42G30kA",
  authDomain: "cinematch-895f6.firebaseapp.com",
  projectId: "cinematch-895f6",
  storageBucket: "cinematch-895f6.appspot.com",
  messagingSenderId: "1276572679",
  appId: "1:1276572679:web:c60f2c27ad3a1e30c3a6a2",
  measurementId: "G-9TML7D5H7Q"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };

