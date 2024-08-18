import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
    
 
const firebaseConfig = {
  apiKey: "AIzaSyBEF5SX7_QHituhBtk8OQl9aySS1s3yoeY",
  authDomain: "app-windows-1928c.firebaseapp.com",
  projectId: "app-windows-1928c",
  storageBucket: "app-windows-1928c.appspot.com",
  messagingSenderId: "9483947953",
  appId: "1:9483947953:web:f64108e2083e7a30bdf790"
};

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  const db = getFirestore(app)