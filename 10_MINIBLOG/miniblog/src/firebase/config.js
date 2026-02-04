import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1GmD9DHPkcjlG_JsAJcqsGClPWrONUTQ",
  authDomain: "miniblog-4cad6.firebaseapp.com",
  projectId: "miniblog-4cad6",
  storageBucket: "miniblog-4cad6.firebasestorage.app",
  messagingSenderId: "1076548525018",
  appId: "1:1076548525018:web:0a4affb66b09ee034bbee3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

//export { db, app };
export { db, auth };
