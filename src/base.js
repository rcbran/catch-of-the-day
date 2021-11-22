import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMrnR64NQtfpgxHKz1t7n2ChDIGq6g09Y",
  authDomain: "catch-of-the-day-rcb-8fa80.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-rcb-8fa80-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
