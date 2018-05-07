import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDUBW5olYEgQPmTBQdO_BjiW1_BYXi2km4",
  authDomain: "fire-b3c73.firebaseapp.com",
  databaseURL: "https://fire-b3c73.firebaseio.com",
  projectId: "fire-b3c73",
  storageBucket: "",
  messagingSenderId: "534430580293"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
