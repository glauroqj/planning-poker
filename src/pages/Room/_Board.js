import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
/** style */
import * as El from './Room.style'
/** firebase */
import firebase from 'firebase/app'
import 'firebase/firestore'

let isMounted = false

const Board = ({user, roomName}) => {
  const db = firebase.firestore()
  const [state, setState] = useState({
    members: [{
      name: user.displayName,
      photo: user.photoURL,
      email: user.email,
      uid: user.uid
    }]
  })

  useEffect(() => {
    isMounted=true
    db.collection('rooms')
      .doc(String(roomName))
      .onSnapshot(doc => {
        console.log('< BOARD LISTENER > ', doc.data())
        if (doc.exists && isMounted) {
          setState({
            ...state,
            members: [...doc.data().membersOnline]
          })
        }
      })

    /** add user */  
    addMember()

    return () => {
      isMounted=false
      /** remove player from room */
      removeMember()
    }
  }, [])

  const addMember = () => {
    db.collection('rooms')
      .doc(String(roomName))
      .update({
        membersOnline: firebase.firestore.FieldValue.arrayUnion({
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          uid: user.uid
        })
      })
      .then(() => {
        console.log('< add member : done >')
      })

  }

  const removeMember = () => {
    db.collection('rooms')
      .doc(String(roomName))
      .update({
        membersOnline: state.members.filter(item => item.uid !== user.uid)
        // membersOnline: firebase.firestore.FieldValue.arrayRemove(String(user.uid))
      })
      .then(() => {
        console.log('< remove member : done >')
      })
  }

  return (
    <El.BoardContainer>
      BOARD
    </El.BoardContainer>
  )
}

Board.propTypes = {
  user: PropTypes.object,
  roomName: PropTypes.string
}

export default Board