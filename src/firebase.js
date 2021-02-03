import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCa2dEn1c0p2nBpda6wuUBcwwYOzGecilo",
    authDomain: "flavicom-cb2d3.firebaseapp.com",
    projectId: "flavicom-cb2d3",
    storageBucket: "flavicom-cb2d3.appspot.com",
    messagingSenderId: "635488134252",
    appId: "1:635488134252:web:f0f57d5fff662506296449",
    measurementId: "G-1FVJWMZT0H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;