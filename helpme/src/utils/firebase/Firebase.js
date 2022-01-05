
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAfFJmxW8oJO-5MRfi2SEloSaL83L2OvYM",
  authDomain: "helpme-1051e.firebaseapp.com",
  databaseURL: "https://helpme-1051e-default-rtdb.firebaseio.com",
  projectId: "helpme-1051e",
  storageBucket: "helpme-1051e.appspot.com",
  messagingSenderId: "180301709644",
  appId: "1:180301709644:web:e719e195b0663920ab4fe9",
  measurementId: "G-F250EK4QC4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getDatabase(app)

export { auth, db };

