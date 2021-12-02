import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase  from "firebase/compat";
import "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.css';
import {Admin} from "./Admin";




var firebaseConfig = {
    apiKey: "AIzaSyDM3B4Nu8j3XxncCFD_HPXCjgbRMF-pEdw",
    authDomain: "ispit-32a0e.firebaseapp.com",
    projectId: "ispit-32a0e",
    storageBucket: "ispit-32a0e.appspot.com",
    messagingSenderId: "261728715587",
    appId: "1:261728715587:web:a71643bc3e97842d4425f6",
    measurementId: "G-H4XB63GGDF"
};
firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();
const db = firebase.firestore();



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {auth,db};