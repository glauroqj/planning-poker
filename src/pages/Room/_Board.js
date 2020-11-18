import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
/** style */
import * as El from './Room.style'
/** components */
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
/** icons */
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
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
    }],
    votes: {},
    options: [0,1,2,3,5,8,13,21,34,55,89,'?'],
    showVotes: false,
    roomOwner: false
  })

  useEffect(() => {
    isMounted=true
    db.collection('rooms')
      .doc(String(roomName))
      .onSnapshot(doc => {
        if (doc.exists && isMounted) {
          // console.log('< BOARD LISTENER > ', doc.data(), state)
          const allData = doc.data()
          setState({
            ...state,
            members: [...doc.data().membersOnline],
            votes: {...doc.data().votes},
            ...allData
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
    delete state.votes[user.uid]

    db.collection('rooms')
      .doc(String(roomName))
      .update({
        membersOnline: state.members.filter(item => item.uid !== user.uid),
        showVotes: false,
        votes: {...state.votes}
        // membersOnline: firebase.firestore.FieldValue.arrayRemove(String(user.uid))
      })
      .then(() => {
        console.log('< remove member : done >')
      })
  }

  const updateVote = vote => {
    db.collection('rooms')
    .doc(String(roomName))
    .set({
      votes: {
        [user.uid]: vote
      }
    }, {merge: true})
    .then(() => {
      console.log('< update vote : done >')
    })
  }

  return (
    <El.BoardContainer>

      <El.BoardTitle>
        <Typography variant="body2" color="textSecondary" component="h3">
          Online Members: {state.members.length}
        </Typography>
      </El.BoardTitle>
      
      <El.BoardButtonValues>
        <ButtonGroup color="primary" size="large">
          {state.options.map((item, idx) => (
            <Button 
              key={idx}
              color={state.votes[user.uid] === item ? 'secondary' : 'primary'}
              variant={state.votes[user.uid] === item ? 'contained' : 'outlined'}
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
       {state.members.map((item, idx) => (
         <El.BoardCard key={idx}>
            <Card>
              <El.BoardMembersImage>
                <img
                  src={item.photo}
                  alt='user image'
                  title={`${item.name}`}
                />
              </El.BoardMembersImage>

              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {item.name}
                </Typography>
                {state.roomOwner === item.uid && (
                  <Typography variant="body2" color="textSecondary" component="p">
                    Owner <EmojiEventsIcon />
                  </Typography>
                )}
              </CardContent>
              {state.showVotes && (
                <CardActions>
                  <Button size="large" color="primary" variant="outlined" fullWidth>
                    { state.votes[item.uid] }
                  </Button>
                </CardActions>
              )}
            </Card>
         </El.BoardCard>
       ))}
      </El.BoardMembers>

    </El.BoardContainer>
  )
}

Board.propTypes = {
  user: PropTypes.object,
  roomName: PropTypes.string
}

export default Board