import React, { useEffect, useContext, memo } from 'react'
/** style */
import * as El from './Home.style'
/** providers */
import { SessionContext } from 'providers/Session'
/** components */
import Button from '@material-ui/core/Button'
/** icons */
import EmailIcon from '@material-ui/icons/Email'

const Home = () => {
  const { user, loginMethod } = useContext(SessionContext)

  useEffect(() => {
    console.log('< HOME : USER > ', user)
  }, [user])


  return (
    <El.HomeContainer className='animated fadeIn'>
      
      <Button
        variant='contained'
        color='primary'
        size='large'
        startIcon={<EmailIcon />}
        onClick={() => loginMethod()}
      >
        login google
      </Button>

    </El.HomeContainer>
  )
}

export default memo(Home)