import React, { useEffect, memo } from 'react'
/** style */
import * as El from './Room.style'
/** providers */
import { SessionContext } from 'providers/Session'
/** components */
import Navbar from 'components/Navbar/Navbar'
/** firebase */
import firebase from 'firebase/app'
import 'firebase/firestore'

const Room = () => {

  return (
    <El.RoomContainer>
      <Navbar />
      
      ROOM
    </El.RoomContainer>
  )
}

export default memo(Room)