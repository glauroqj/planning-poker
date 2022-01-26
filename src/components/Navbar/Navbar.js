import React, { useState, useContext, memo, useEffect } from "react";
import { Link } from "react-router-dom";
/** style */
import * as El from "./Navbar.style";
/** providers */
import { SessionContext } from "providers/Session";
/** components */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
/** icons */
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const { user, logoutMethod } = useContext(SessionContext);
  const [anchorEl, setAnchorEl] = useState(null);

  console.log("< NAVBAR : USER > ", user);

  useEffect(() => {
    if (!user?.displayName) setAnchorEl(null);
  }, [user]);

  return (
    <AppBar position="static" className="animated fadeInDown">
      <Toolbar variant="dense">
        <El.NavbarContainer>
          <Link to="/">
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
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  title={user.displayName}
                />
              </El.NavbarUser>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={anchorEl ? true : false}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => logoutMethod()}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </El.NavbarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
