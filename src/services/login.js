import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const googleProvider = new firebase.auth.GoogleAuthProvider()

const fetchUserService = () => (
  new Promise(resolve => {
    firebase.auth()
    .onAuthStateChanged(async user => {
      // console.log('< FETCH USER MIDDLEWARE > ', user)
      if (user) resolve(user)
      if (!user) resolve({})
    })
  })
)