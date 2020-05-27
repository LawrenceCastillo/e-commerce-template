import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCovDNR61oies0r5XnxuGQiq1whNrM7I_U",
  authDomain: "e-commerce-db-a0c87.firebaseapp.com",
  databaseURL: "https://e-commerce-db-a0c87.firebaseio.com",
  projectId: "e-commerce-db-a0c87",
  storageBucket: "e-commerce-db-a0c87.appspot.com",
  messagingSenderId: "25900247010",
  appId: "1:25900247010:web:1eeb00a9c8c536d50cbbbb",
  measurementId: "G-QSZSWYLMNW"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase