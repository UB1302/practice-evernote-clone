import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkIvpVbY15qlr71lKO8KbEeSMmFx3kCyc",
  authDomain: "evernote-clone-9628e.firebaseapp.com",
  projectId: "evernote-clone-9628e",
  storageBucket: "evernote-clone-9628e.appspot.com",
  messagingSenderId: "776139508642",
  appId: "1:776139508642:web:cea74f3afb1b8dbefa40fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





ReactDOM.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
  ,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

