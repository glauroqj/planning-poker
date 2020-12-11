import React, { useState, useCallback } from 'react'
/** components */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
/** style */
import * as El from './Home.style'
/** svg */
import { ReactComponent as ScrumIcon }  from 'assets/images/scrum.svg'
/** icons */
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

const debounce = (callback, delay) => {
  let interval
  return (...args) => {
    clearTimeout(interval)
    interval = setTimeout(() => {
      interval = null
      callback(...args)
    }, delay)
  }
}

const CreateRoom = ({createRoom, changeState}) => {

  const [urlName, setUrlName] = useState('')

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

  const verifyRoomName = useCallback(
    debounce(value => {

      if (value.length <= 0) {
        setUrlName('')
        return null
      }
      if (value.length > 30) return null
      const finalUrl = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
      setUrlName(finalUrl)
      changeState(finalUrl)

    }, 400)
  )

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
        {urlName !== '' && (
          <h6>Url: {urlName}</h6>
        )}
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