import React, { useEffect, useContext, memo } from 'react'
/** style */
import * as El from './Home.style'
/** providers */
import { SessionContext } from 'providers/Session'
/** components */
import Navbar from 'components/Navbar/Navbar'
import Button from '@material-ui/core/Button'
/** icons */
import EmailIcon from '@material-ui/icons/Email'


const Home = () => {
  const {loginMethod } = useContext(SessionContext)

  return (
    <El.HomeContainer className='animated fadeIn'>

      <Navbar />
      
      <El.HomeContainerBody>
        
        <Button
          variant='contained'
          color='secondary'
          size='large'
          startIcon={<EmailIcon />}
          onClick={() => loginMethod()}
        >
          login google
        </Button>

      </El.HomeContainerBody>

    </El.HomeContainer>
  )
}

export default memo(Home)