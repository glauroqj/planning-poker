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

const loginService = () => (
  new Promise(resolve => {

    firebase.auth()
    .signInWithPopup(googleProvider)
    .then(async response => {

      // console.log('< LOGIN SERVICE > ', response)
      resolve(response.user)
    })
    .catch(err => {
      console.warn('< ERROR :  LOGIN SERVICE > ', err)
      resolve({})
    })

  })
)

const logoutService = () => (
  new Promise(resolve => {

    firebase.auth()
    .signOut()
    .then(() => resolve({}) )
    .catch(() => resolve({}) )

  })
)

export {
  fetchUserService,
  loginService,
  logoutService
}