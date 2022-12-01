import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2SjP-pmGCn7stu7cFcbVM9EHb1yWZPWQ",
    authDomain: "linkedin-clone-56521.firebaseapp.com",
    projectId: "linkedin-clone-56521",
    storageBucket: "linkedin-clone-56521.appspot.com",
    messagingSenderId: "614985054716",
    appId: "1:614985054716:web:eb21d8f3a485bc7999da79",
    measurementId: "G-SJTW14G4X3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
