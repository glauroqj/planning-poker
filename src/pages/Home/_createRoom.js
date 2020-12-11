import React from 'react'
/** components */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
/** style */
import * as El from './Home.style'
/** svg */
import { ReactComponent as ScrumIcon }  from 'assets/images/scrum.svg'
/** icons */
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

const CreateRoom = ({createRoom, changeState}) => {

  const handleKeys = e => {
    const keyActions = {
      13: () => { // enter
        createRoom()
        e.preventDefault()
      }
    }
    const callKeyActions = keyActions[e.keyCode]
    if (typeof callKeyActions === 'function') callKeyActions()
  }

  const verifyRoomName = value => {

    // changeState(e.target.value)
  }

  return (
    <form 
      autoComplete="off"
      onKeyDown={handleKeys}
    >
      <El.HomeForm>
        <ScrumIcon />
        <TextField 
          required
          id="outlined-basic"
          label="Room Name" 
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={e => verifyRoomName(e.target.value)}
        />
        <Button
          variant='contained'
          color='secondary'
          size='large'
          fullWidth
          onClick={() => createRoom()}
        >
          create room <MeetingRoomIcon />
        </Button>
      </El.HomeForm>
    </form>
  )
}

export default CreateRoom