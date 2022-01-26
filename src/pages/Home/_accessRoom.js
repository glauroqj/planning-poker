import React from "react";
import { Link } from "react-router-dom";
/** components */
import Button from "@mui/material/Button";
/** style */
import * as El from "./Home.style";
/** svg */
import { ReactComponent as VoteIcon } from "assets/images/voting.svg";
/** icons */
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const AccessRoom = ({ link }) => (
  <El.HomeAccessRoom>
    <VoteIcon />
    <Link to={`${link}`}>
      <Button variant="contained" color="secondary" size="large" fullWidth>
        go to {`${link}`} <MeetingRoomIcon />
      </Button>
    </Link>
  </El.HomeAccessRoom>
);

export default AccessRoom;
