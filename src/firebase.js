import firebase from "firebase"



var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFhtopNyM_XxM1OKEVB8YAC7ZFnwztE5Y",
    authDomain: "contact-form-dd193.firebaseapp.com",
    projectId: "contact-form-dd193",
    storageBucket: "contact-form-dd193.appspot.com",
    messagingSenderId: "482670584646",
    appId: "1:482670584646:web:32ee2386ed3c4229573b47"

});
var db = firebaseApp.firestore();
export {db};


// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCFhtopNyM_XxM1OKEVB8YAC7ZFnwztE5Y",
//     authDomain: "contact-form-dd193.firebaseapp.com",
//     projectId: "contact-form-dd193",
//     storageBucket: "contact-form-dd193.appspot.com",
//     messagingSenderId: "482670584646",
//     appId: "1:482670584646:web:32ee2386ed3c4229573b47"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);