import React from "react";
/** components */
import Button from "@mui/material/Button";
/** icons */
import EmailIcon from "@mui/icons-material/Email";
/** style */
import * as El from "./Home.style";
/** svg */
import { ReactComponent as LoginIcon } from "assets/images/login.svg";

const Login = ({ loginMethod, changeState }) => (
  <El.HomeLogin>
    <LoginIcon />
    <Button
      variant="contained"
      color="secondary"
      size="large"
      startIcon={<EmailIcon />}
      onClick={() => {
        // setState({
        //   ...state,
        //   loading: true
        // })
        changeState({ loading: true });
        loginMethod();
      }}
    >
      login google
    </Button>
  </El.HomeLogin>
);

export default Login;
