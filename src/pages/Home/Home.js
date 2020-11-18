import React, { memo } from 'react'
/** style */
import * as El from './Home.style'
/** components */
import Button from '@material-ui/core/Button'
/** icons */
import EmailIcon from '@material-ui/icons/Email'
// import Sidebar from 'components/Sidebar/Sidebar'

const Home = () => {

  return (
    <El.HomeContainer className='animated fadeIn'>
      
      <Button
        variant='contained'
        color='primary'
        size='large'
        startIcon={<EmailIcon />}
      >
        login google
      </Button>

    </El.HomeContainer>
  )
}

export default memo(Home)