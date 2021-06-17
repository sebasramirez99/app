import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBn3jXKncQX3MrpArLCUxN8HCgbdXC_WIQ",
    authDomain: "concurvas-64a00.firebaseapp.com",
    databaseURL: "https://concurvas-64a00-default-rtdb.firebaseio.com",
    projectId: "concurvas-64a00",
    storageBucket: "concurvas-64a00.appspot.com",
    messagingSenderId: "174920535219",
    appId: "1:174920535219:web:29504b56121c4f31cff4c6",
    measurementId: "G-R1SDQHSCR5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 

  const db = firebase.firestore();


  export default {
      firebase,
      db,
  }