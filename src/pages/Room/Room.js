import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
/** style */
import * as El from "./Room.style";
/** providers */
import { useSession } from "providers/Session";
/** components */
import Navbar from "components/Navbar/Navbar";
import Board from "./_Board";
import Button from "@mui/material/Button";
import Loading from "components/Loading/Loading";
import Typography from "@mui/material/Typography";
/** icons */
import EmailIcon from "@mui/icons-material/Email";
/** firebase */
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Room = () => {
  const { user, loginMethod } = useSession();
  const [state, setState] = useState({
    loading: true,
    isValidRoom: false,
    roomPayload: {},
  });
  const db = firebase.firestore();
  const { roomID } = useParams();

  useEffect(() => {
    if (!user?.displayName) {
      setState({
        ...state,
        loading: false,
      });
    }

    /** check if room is valid */
    if (user?.displayName) {
      db.collection("rooms")
        .doc(roomID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("< GET ROOM > ", doc.data());
            setState({
              ...state,
              loading: false,
              isValidRoom: true,
              roomPayload: doc.data(),
            });
          } else {
            setState({ ...state, loading: false });
          }
        })
        .catch((e) => {
          console.warn("< GET ROOM : ERROR > ", e);
          setState({ ...state, loading: false });
        });
    }
  }, [user]);

  return (
    <El.RoomContainer>
      <Navbar />

      <El.RoomContainerBody>
        {state.loading ? (
          <Loading text="Loading..." />
        ) : (
          <>
            {!user?.displayName && (
              <>
                <Typography variant="h6">
                  Please, you need to create/make login to access that room!
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={() => loginMethod()}
                >
                  login google
                </Button>
              </>
            )}

            {user?.displayName && !state.isValidRoom && (
              <Link to="/">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  Invalid Room
                </Button>
              </Link>
            )}

            {user?.displayName && state.isValidRoom && (
              <Board user={user} roomName={roomID} />
            )}
          </>
        )}
      </El.RoomContainerBody>
    </El.RoomContainer>
  );
};

export default Room;
