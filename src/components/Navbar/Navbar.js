import React, { useState, useContext } from 'react'
/** providers */
import { SessionContext } from 'providers/Session'
/** components */
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
/** icons */
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import AccountCircle from '@material-ui/icons/AccountCircle'

const Navbar = () => {
  const { user, logoutMethod } = useContext(SessionContext)
  const [menu, setMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">
          Planning Poker Hit <DirectionsRunIcon />
        </Typography>
        {user?.displayName && (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={e => setAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </>
          // <Button
          //   variant='contained'
          //   color='secondary'
          //   size='small'
          //   endIcon={<MeetingRoomIcon />}
          // >
          //   create room
          // </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar