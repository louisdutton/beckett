// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA2-r6WQoBOVY7aXrH2gT-WZ8vF-hQMGe4",
	authDomain: "beckett-36b3b.firebaseapp.com",
	projectId: "beckett-36b3b",
	storageBucket: "beckett-36b3b.appspot.com",
	messagingSenderId: "85782311696",
	appId: "1:85782311696:web:69d57e6dc43447195a2b95",
	measurementId: "G-CLBMVVW6X9",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
