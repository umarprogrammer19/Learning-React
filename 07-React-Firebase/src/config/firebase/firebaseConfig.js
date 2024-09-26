import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtAjj90S3HVFhfj6m6hI5ul_lHfjC3Ct8",
    authDomain: "react-todo-121.firebaseapp.com",
    projectId: "react-todo-121",
    storageBucket: "react-todo-121.appspot.com",
    messagingSenderId: "506210755593",
    appId: "1:506210755593:web:9819b814a03d5122b604d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;