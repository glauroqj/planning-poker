import React, { useState, useEffect } from "react";
/** style */
import * as El from "./Home.style";
/** providers */
import { useSession } from "providers/Session";
/** components */
import Navbar from "components/Navbar/Navbar";
import Loading from "components/Loading/Loading";

import Login from "./_login";
import CreateRoom from "./_createRoom";
import AccessRoom from "./_accessRoom";
/** firebase */
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Home = () => {
  const { user, loginMethod } = useSession();

  const [form, setForm] = useState("");
  const [state, setState] = useState({
    loading: true,
    createdRoom: false,
    roomPayload: {},
  });

  const db = firebase.firestore();

  useEffect(() => {
    /** check available rooms */
    if (user.displayName) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("< VERIFY ROOM > ", doc.data());
            setState({
              ...state,
              loading: false,
              createdRoom: true,
              roomPayload: doc.data(),
            });
          } else {
            setState({ ...state, loading: false });
          }
        })
        .catch((e) => console.warn("< GET ROOM : ERROR > ", e));
    } else {
      setState({ ...state, loading: false, createdRoom: false });
    }
  }, [user]);

  const createRoom = async () => {
    db.collection("users")
      .doc(user.uid)
      // .doc(`${form}-${btoa(user.uid)}`)
      .set({
        roomOwner: user.uid,
        roomName: form,
        createDate: new Date(),
        url: `/room/${form}`,
      })
      .then((response) => {
        console.log("< CREATE ROOM : DONE > ", response);

        setState({
          ...state,
          createdRoom: true,
          roomPayload: {
            roomOwner: user.uid,
            roomName: form,
            url: `/room/${form}`,
          },
        });

        db.collection("rooms")
          .doc(String(form))
          .set({
            membersOnline: [],
            votes: {},
            tasks: [],
            showVotes: false,
            roomOwner: user.uid,
            roomName: form,
            url: `/room/${form}`,
          });
      })
      .catch((e) => console.warn("< CREATE ROOM : ERROR > ", e));
  };

  return (
    <El.HomeContainer className="animated fadeIn">
      <Navbar />

      <El.HomeContainerBody>
        {state.loading ? (
          <Loading text="Loading..." />
        ) : (
          <>
            {!user?.displayName && (
              <Login
                loginMethod={() => loginMethod()}
                changeState={(value) => setState({ ...state, ...value })}
              />
            )}

            {/** create room */}
            {user?.displayName && !state.createdRoom && (
              <CreateRoom
                createRoom={() => createRoom()}
                changeState={(value) => setForm(value)}
              />
            )}

            {/** access room */}
            {user?.displayName && state.createdRoom && (
              <AccessRoom link={state.roomPayload.url} />
            )}
          </>
        )}
      </El.HomeContainerBody>
    </El.HomeContainer>
  );
};

export default Home;
