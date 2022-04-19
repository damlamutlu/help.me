import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWhFK12I00KyUYLtvcPXmcKL6BA69QJrU",
  authDomain: "helpme-a114f.firebaseapp.com",
  projectId: "helpme-a114f",
  storageBucket: "helpme-a114f.appspot.com",
  messagingSenderId: "381589053407",
  appId: "1:381589053407:web:90114a8d5dffcfeec76e6a",
  measurementId: "G-CB8FMNPF3J"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const realTimedb = getDatabase(app);
const database = getFirestore();

export { auth, realTimedb ,database };
