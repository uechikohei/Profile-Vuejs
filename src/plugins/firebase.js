import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDwHv2jfvlbQSy_bxjcgUZAQMJOUfdC0tI",
  authDomain: "uechi-kohei.firebaseapp.com",
  databaseURL: "https://uechi-kohei.firebaseio.com",
  storageBucket: "uechi-kohei.appspot.com",
  projectId: "uechi-kohei",
  messagingSenderId: "1033408297022"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
