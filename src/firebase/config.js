import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp}