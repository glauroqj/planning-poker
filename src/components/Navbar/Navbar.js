import React, { useState, useContext, memo, useEffect } from 'react'
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
import AccountCircle from '@material-ui/icons/AccountCircle'

const Navbar = () => {
  const { user, logoutMethod } = useContext(SessionContext)
  const [anchorEl, setAnchorEl] = useState(null)
  
  console.log('< NAVBAR : USER > ', user)

  useEffect(() => {
    if (!user?.displayName) setAnchorEl(null)
  }, [user])

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <El.NavbarContainer>
          <Link to='/'>
            <Typography variant="h6">
              Planning Poker Hit <DirectionsRunIcon />
            </Typography>
          </Link>
          {user?.displayName && (
            <>
              <El.NavbarUser
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={e => setAnchorEl(e.currentTarget)}
              >
                <img src={user.photoURL} alt={user.displayName} title={user.displayName} />
              </El.NavbarUser>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={anchorEl ? true : false}
                onClose={() => setAnchorEl(null) }
              >
                <MenuItem onClick={() => logoutMethod()}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </El.NavbarContainer>
      </Toolbar>
    </AppBar>
  )
}

export default memo(Navbar)