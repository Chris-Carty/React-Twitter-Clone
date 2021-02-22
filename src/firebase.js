import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjaJVhFQxLl6tFwVOFcXLdgx4uEvmHwRY",
  authDomain: "twitter-clone-6cf14.firebaseapp.com",
  projectId: "twitter-clone-6cf14",
  storageBucket: "twitter-clone-6cf14.appspot.com",
  messagingSenderId: "212336926641",
  appId: "1:212336926641:web:80da61bf146215d8e1e790",
  measurementId: "G-F5G99Y98GZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
