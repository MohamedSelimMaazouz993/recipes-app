import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdjwYGwnxoz9yUvJTICdfgztU2Va-3e_g",
  authDomain: "recipes-app-2c412.firebaseapp.com",
  projectId: "recipes-app-2c412",
  storageBucket: "recipes-app-2c412.appspot.com",
  messagingSenderId: "724476347058",
  appId: "1:724476347058:web:45e87cad434baa54ceffab",
  measurementId: "G-1604GJQCBE"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
