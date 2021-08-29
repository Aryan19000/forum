import firebase from 'firebase'
require('@firebase/firestore')
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDIX00jl2XzECR2KSOPBJiaBz1iGZAB6mY",
  authDomain: "complaint-forum-12d35.firebaseapp.com",
  projectId: "complaint-forum-12d35",
  storageBucket: "complaint-forum-12d35.appspot.com",
  messagingSenderId: "1000103405323",
  appId: "1:1000103405323:web:9ad62124b4960564a1e40e"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

