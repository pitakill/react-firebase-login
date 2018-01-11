// @flow
export const ENVIRONMENT: ?string = process.env.NODE_ENV;

type FirebaseConfig = {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string
};
export const FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: "AIzaSyDR0nLFs_O12wYx4Vy5P1DHob2Oka2pmPc",
  authDomain: "login-3ce40.firebaseapp.com",
  databaseURL: "https://login-3ce40.firebaseio.com",
  projectId: "login-3ce40",
  storageBucket: "",
  messagingSenderId: "653052366658"
};
