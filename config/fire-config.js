import firebase from "firebase";

// configuration of firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhAqCeRu6MLecCI5e5J2-1_hHXABUEulo",
  authDomain: "blogapp-ee907.firebaseapp.com",
  databaseURL:
    "https://blogapp-ee907-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "blogapp-ee907",
  storageBucket: "blogapp-ee907.appspot.com",
  messagingSenderId: "235177503438",
  appId: "1:235177503438:web:6a9dee1678cca7ec797e9f",
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message))
    console.error("firebase init error", err.stact);
}

export default fireConf;
