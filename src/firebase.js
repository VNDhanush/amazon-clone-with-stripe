import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAz8EmZtqrWFEi0-ouXUqmPzv_gdYeVf_o",
  authDomain: "clone-stripe-challenge.firebaseapp.com",
  databaseURL: "https://clone-stripe-challenge.firebaseio.com",
  projectId: "clone-stripe-challenge",
  storageBucket: "clone-stripe-challenge.appspot.com",
  messagingSenderId: "551819227168",
  appId: "1:551819227168:web:79cb2f82d935b678bc4c45",
  measurementId: "G-KR1ER05SCG"
};

//initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };