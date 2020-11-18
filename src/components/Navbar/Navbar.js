import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
/** style */
import * as El from './Navbar.style'
/** providers */
import { SessionContext } from 'providers/Session'
/** components */
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
/** icons */
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import AccountCircle from '@material-ui/icons/AccountCircle'

const Navbar = () => {
  const { user, logoutMethod } = useContext(SessionContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <El.NavbarContainer>
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
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={()=> setAnchorEl(null)}
              >
                <MenuItem>
                  <El.NavbarLinkItem>
                    <Link to='/create-room'>
                      Create Room <MeetingRoomIcon />
                    </Link>
                  </El.NavbarLinkItem>
                </MenuItem>
                <MenuItem onClick={() => logoutMethod()}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </El.NavbarContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar