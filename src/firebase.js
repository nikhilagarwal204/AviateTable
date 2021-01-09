import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyAgPnL3vpieutG9wpq0LqIPbMzKJWKQbxI",
    authDomain: "test-f0eaf.firebaseapp.com",
    databaseURL: "https://test-f0eaf-default-rtdb.firebaseio.com",
    projectId: "test-f0eaf",
    storageBucket: "test-f0eaf.appspot.com",
    messagingSenderId: "313053486355",
    appId: "1:313053486355:web:a6a531f9e62ccdac5ccee6",
    measurementId: "G-WEXRN9MMY2"
}

firebase.initializeApp(config)
export default firebase