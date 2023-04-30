import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcUMbgH1QDlmGgWn8haglXwMdSvmQzr7w",
  authDomain: "backend51150-74d70.firebaseapp.com",
  projectId: "backend51150-74d70",
  storageBucket: "backend51150-74d70.appspot.com",
  messagingSenderId: "375531019041",
  appId: "1:375531019041:web:0a6377137ad140e04e3c60"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

