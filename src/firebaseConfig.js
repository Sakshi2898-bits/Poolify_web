import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDNknlu9Wg6JAbLJEKk_GdcxLMjby7gTPs",
    authDomain: "poolify-cf7a2.firebaseapp.com",
    databaseURL: "https://poolify-cf7a2-default-rtdb.firebaseio.com",
    projectId: "poolify-cf7a2",
    storageBucket: "poolify-cf7a2.appspot.com",
    messagingSenderId: "1090410071382",
    appId: "1:1090410071382:web:f3702acc934b5280e8c2f7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, database, db, onAuthStateChanged};


