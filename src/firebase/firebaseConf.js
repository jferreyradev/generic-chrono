import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyDnSKodQRRNRkQiPe0x6pv2Xd2vLm_47aY",
        authDomain: "timers-21dd2.firebaseapp.com",
        projectId: "timers-21dd2",
        storageBucket: "timers-21dd2.appspot.com",
        messagingSenderId: "227231297327",
        appId: "1:227231297327:web:d13c6c8cd2ddba5a28bbda"
      };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;