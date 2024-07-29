import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuSQsXLJmZ3DoeHq1GALkH3Ai2qLiSfqo",
    authDomain: "trabajosenmendoza-9801f.firebaseapp.com",
    projectId: "trabajosenmendoza-9801f",
    storageBucket: "trabajosenmendoza-9801f.appspot.com",
    messagingSenderId: "610344800718",
    appId: "1:610344800718:web:694e789d6056d2a92e1b9f",
    measurementId: "G-GF7B75Q2V6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);