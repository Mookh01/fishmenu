import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyANtzt3xE58P2u3y2rE7cptWRf0dl7MOo0",
    authDomain: "ref-auth.firebaseapp.com",
    databaseURL: "https://ref-auth.firebaseio.com",
    projectId: "ref-auth",
    storageBucket: "ref-auth.appspot.com",
    messagingSenderId: "128248900887"
  
})

const base = Rebase.createClass(firebaseApp.database())

//this is a named export
export { firebaseApp }

//this is a default export
export default base;