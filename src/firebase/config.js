// * es todo
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseApp = firebase.initializeApp({


  apiKey: "AIzaSyAgheQ4xflpK_Awn9LOTHY2JjRbfSGmvjQ",
    authDomain: "burguer-queen-b451c.firebaseapp.com",
    databaseURL: "https://burguer-queen-b451c.firebaseio.com",
    projectId: "burguer-queen-b451c",
    storageBucket: "burguer-queen-b451c.appspot.com",
    messagingSenderId: "506561367008",
    appId: "1:506561367008:web:4efac5ba6f1cc021"

  })
const db=firebaseApp.firestore();
export {db};

