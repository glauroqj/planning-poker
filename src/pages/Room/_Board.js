import React, { useState, useEffect, useCallback } from 'react'
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
import DoneIcon from '@material-ui/icons/Done'
/** firebase */
import firebase from 'firebase/app'
import 'firebase/firestore'

const Board = ({user, roomName}) => {
  const db = firebase.firestore()
  const [state, setState] = useState({
    votes: {},
    options: ['0',1,2,3,5,8,13,21,34,55,89,'?'],
    showVotes: false,
    roomOwner: false,
    taskName: '',
    membersOnline: []
  })

  useEffect(() => {
    window.addEventListener('beforeunload', listenerCloseWindow)

    const unsubscribe = db.collection('rooms')
      .doc(String(roomName))
      .onSnapshot(doc => {
        if (doc.exists) {
          const allData = doc.data()
          setState({
            ...state,
            ...allData
          })
        }
      })

    /** add user */  
    addMember()

    return () => {
      /** remove player from room */
      unsubscribe()
      removeMember()
      // window.removeEventListener('beforeunload', listenerCloseWindow)
    }
  }, [])

  const listenerCloseWindow = useCallback((e) => {
    removeMember()
    e.preventDefault()
    e.returnValue = ''
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
      .get()
      .then(doc => {

        if (doc.exists) {
          const { membersOnline, votes } = doc.data()
          // console.log('< remove values > ',membersOnline, votes)
          delete votes[user.uid]

          db.collection('rooms')
            .doc(String(roomName))
            .update({
              membersOnline: membersOnline.filter(item => item.uid !== user.uid),
              showVotes: false,
              votes: {...votes}
            })
            .then(() => {
              console.log('< remove member : done >')
            })
        }

      })
  }

  return (
    <El.BoardContainer>

      <El.BoardTaskNameSection>
        <El.BoardTitle>
          <Typography variant="body2" color="textSecondary" component="h3">
            Voted Tasks
          </Typography>
        </El.BoardTitle>
        <El.BoardTaskNameBody>
          tasks name
        </El.BoardTaskNameBody>
      </El.BoardTaskNameSection>

      <El.BoardSection>

        <El.BoardTitle>
          <Typography variant="body2" color="textSecondary" component="h3">
            Online Members: <b>{state.membersOnline.length}</b>
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
                  db.collection('rooms')
                  .doc(String(roomName))
                  .set({
                    votes: {
                      [user.uid]: item
                    }
                  }, {merge: true})
                  .then(() => {
                    console.log('< update vote : done >')
                  })
                }}
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
        </El.BoardButtonValues>

        <El.BoardMembers>
        {state.membersOnline.length > 0 && 
          state.membersOnline.map((item, idx) => (
          <El.BoardCard key={idx} className="animated fadeIn">
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
                  {state.votes[item.uid] && (
                    <Typography variant="body2" color="textSecondary" component="p">
                      Voted <DoneIcon />
                    </Typography>
                  )}

                  {user.uid === item.uid && 
                    state.roomOwner === user.uid &&
                    !state.showVotes && (
                    <El.BoardCardButtonRevealVote>
                      <input 
                        placeholder='Task Name'
                      />
                      <Button 
                        size="medium"
                        color="secondary"
                        variant="contained"
                        fullWidth
                        disabled={ state.membersOnline.length === Object.keys(state.votes).length ? false: true }
                        onClick={() => {
                          db.collection('rooms')
                          .doc(String(roomName))
                          .set({
                            showVotes: true
                          }, {merge: true})
                          .then(() => {
                            console.log('< update showVotes : done >')
                          })
                        }}
                      >
                        Reveal Votes
                      </Button>
                    </El.BoardCardButtonRevealVote>
                  )}

                  {user.uid === item.uid && 
                  state.roomOwner === user.uid &&
                  state.showVotes && (
                    <El.BoardCardButtonRevealVote>
                      <Button 
                        size="medium"
                        color="secondary"
                        variant="outlined"
                        fullWidth
                        onClick={() => {
                          db.collection('rooms')
                          .doc(String(roomName))
                          .set({
                            showVotes: false,
                            votes: {}
                          }, {merge: true})
                          .then(() => {
                            console.log('< update showVotes : done >')
                          })
                        }}
                      >
                        Reset Votes
                      </Button>
                    </El.BoardCardButtonRevealVote>
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
        
      </El.BoardSection>
    </El.BoardContainer>
  )
}

Board.propTypes = {
  user: PropTypes.object,
  roomName: PropTypes.string
}

export default Board