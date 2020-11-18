import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
/** style */
import * as El from './Room.style'
/** components */
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
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
      uid: user.uid,
      vote: ''
    }],
    options: [0,1,2,3,5,8,13,21,34,55,89,'?'],
    chooseValue: ''
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
          uid: user.uid,
          vote: ''
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

  const updateVote = (vote) => {
    db.collection('rooms')
    .doc(String(roomName))
    .set({
      membersOnline: state.members.map(item => item.uid === user.uid ? {...item, vote: vote}: item)
    }, {merge: true})
    .then(() => {
      console.log('< add member : done >')
    })
  }

  return (
    <El.BoardContainer>
      
      <El.BoardButtonValues>
        <ButtonGroup color="primary" size="large">
          {state.options.map((item, idx) => (
            <Button 
              key={idx}
              color={state.chooseValue === item ? 'secondary' : 'primary'}
              variant={state.chooseValue === item ? 'contained' : 'outlined'}
              onClick={() => {
                // setState({...state, chooseValue: item})
                updateVote(item)
              }}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </El.BoardButtonValues>

      <El.BoardMembers>

      </El.BoardMembers>

    </El.BoardContainer>
  )
}

Board.propTypes = {
  user: PropTypes.object,
  roomName: PropTypes.string
}

export default Board