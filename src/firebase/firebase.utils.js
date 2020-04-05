import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAarO1vqc85pWTemw-77vf8hAdWxXG0uz4",
  authDomain: "react-ecommerce-db-96567.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db-96567.firebaseio.com",
  projectId: "react-ecommerce-db-96567",
  storageBucket: "react-ecommerce-db-96567.appspot.com",
  messagingSenderId: "447589315404",
  appId: "1:447589315404:web:38e5e043a17fab388595e9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoole = () => auth.signInWithPopup(provider);

export default firebase;
