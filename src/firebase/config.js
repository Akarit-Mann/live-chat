
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAVW9hiiO2HrlSPr6JzDc4YOI_mS5Uy0X8",
    authDomain: "vue-test3-f945f.firebaseapp.com",
    projectId: "vue-test3-f945f",
    storageBucket: "vue-test3-f945f.appspot.com",
    messagingSenderId: "987590601482",
    appId: "1:987590601482:web:2dd44a0b46d732d4f4e8f3"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth()
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth}