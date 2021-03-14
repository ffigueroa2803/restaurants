import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbl9HM1BOG7QxE9fMqpOo9BceKzt_Bl3Y",
    authDomain: "restaurants-e93ec.firebaseapp.com",
    projectId: "restaurants-e93ec",
    storageBucket: "restaurants-e93ec.appspot.com",
    messagingSenderId: "235244038612",
    appId: "1:235244038612:web:d35435f2bccd3e19d20e41"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)