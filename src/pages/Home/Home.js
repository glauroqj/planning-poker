import React, { useState, useContext, memo } from 'react'
/** style */
import * as El from './Home.style'
/** providers */
import { SessionContext } from 'providers/Session'
/** components */
import Navbar from 'components/Navbar/Navbar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
/** icons */
import EmailIcon from '@material-ui/icons/Email'


const Home = () => {
  const { user, loginMethod } = useContext(SessionContext)
  const [form, setForm] = useState('')

  const handleKeys = e => {
    const keyActions = {
      13: () => { // enter
        // handleEnter()
        e.preventDefault()
        
      }
    }
    const callKeyActions = keyActions[e.keyCode]
    if (typeof callKeyActions === 'function') callKeyActions()
  }

  return (
    <El.HomeContainer className='animated fadeIn'>

      <Navbar />
      
      <El.HomeContainerBody>
        
        {!user?.displayName && (
          <Button
            variant='contained'
            color='secondary'
            size='large'
            startIcon={<EmailIcon />}
            onClick={() => loginMethod()}
          >
            login google
          </Button>
        )}

        {user?.displayName && (
          <form 
            autoComplete="off"
            onKeyDown={handleKeys}
          >
            <El.HomeForm>
              <TextField 
                required
                id="outlined-basic"
                label="Room Name" 
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={e => setForm(e.target.value)}
              />
              <Button
                variant='contained'
                color='secondary'
                size='large'
                fullWidth
              >
                create room
              </Button>
            </El.HomeForm>
          </form>
        )}

      </El.HomeContainerBody>

    </El.HomeContainer>
  )
}

export default memo(Home)