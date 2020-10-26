import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCdXvECsGtbt82DRigzVz6nK_tzc37hffQ",
  authDomain: "projects-list-e4db7.firebaseapp.com",
  databaseURL: "https://projects-list-e4db7.firebaseio.com",
  projectId: "projects-list-e4db7",
  storageBucket: "projects-list-e4db7.appspot.com",
  messagingSenderId: "622059516018",
  appId: "1:622059516018:web:4ea52be4773528f02512eb",
  measurementId: "G-KBGPMF2WK5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
