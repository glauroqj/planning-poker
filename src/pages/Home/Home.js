import React, { useEffect, memo } from 'react'
/** style */
import * as El from './Home.style'
/** components */
// import Sidebar from 'components/Sidebar/Sidebar'

const Home = () => {

  return (
    <El.HomeContainer className='animated fadeIn'>
      HOME
    </El.HomeContainer>
  )
}

export default memo(Home)