import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

 const firebaseConfig = {
  apiKey: "AIzaSyAnQlazrS2c8MZRcnXDQlB2MlAfQRB_L_w",
  authDomain: "evernote-clone-478d7.firebaseapp.com",
  databaseURL: "https://evernote-clone-478d7.firebaseio.com",
  projectId: "evernote-clone-478d7",
  storageBucket: "evernote-clone-478d7.appspot.com",
  messagingSenderId: "623746779693",
  appId: "1:623746779693:web:eaf07b9c911a92077d46a4"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
