import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
/** style */
import * as El from "./Room.style";
/** components */
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TaskNames from "./_TaskNames";
/** icons */
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DoneIcon from "@mui/icons-material/Done";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
/** firebase */
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const debounce = (callback, delay) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, delay);
  };
};

const Board = ({ user, roomName }) => {
  const db = firebase.firestore();
  const [state, setState] = useState({
    votes: {},
    options: ["0", 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?"],
    showVotes: false,
    roomOwner: false,
    membersOnline: [],
    tasks: [],
    taskName: "",
  });

  useEffect(() => {
    window.addEventListener("beforeunload", listenerCloseWindow);

    const unsubscribe = db
      .collection("rooms")
      .doc(String(roomName))
      .onSnapshot((doc) => {
        if (doc.exists) {
          const allData = doc.data();
          setState({
            ...state,
            ...allData,
          });
        }
      });

    /** add user */
    addMember();

    return () => {
      /** remove player from room */
      unsubscribe();
      removeMember();
      // window.removeEventListener('beforeunload', listenerCloseWindow)
    };
  }, []);

  const listenerCloseWindow = useCallback((e) => {
    removeMember();
    e.preventDefault();
    e.returnValue = "";
  }, []);

  const addMember = () => {
    db.collection("rooms")
      .doc(String(roomName))
      .update({
        lastAccess: new Date(),
        membersOnline: firebase.firestore.FieldValue.arrayUnion({
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          uid: user.uid,
        }),
      })
      .then(() => {
        console.log("< add member : done >");
      });
  };

  const removeMember = () => {
    db.collection("rooms")
      .doc(String(roomName))
      .get()
      .then((doc) => {
        if (doc.exists) {
          const { membersOnline, votes } = doc.data();
          // console.log('< remove values > ',membersOnline, votes)
          delete votes[user.uid];

          db.collection("rooms")
            .doc(String(roomName))
            .update({
              membersOnline: membersOnline.filter(
                (item) => item.uid !== user.uid
              ),
              showVotes: false,
              votes: { ...votes },
            })
            .then(() => {
              console.log("< remove member : done >");
            });
        }
      });
  };

  const updateTaskName = useCallback(
    debounce((value) => {
      db.collection("rooms")
        .doc(String(roomName))
        .set(
          {
            taskName: value,
          },
          { merge: true }
        )
        .then(() => {
          console.log("< update showVotes : done >");
        });
    }, 1000)
  );

  return (
    <El.BoardContainer>
      {/** sidebar */}
      <TaskNames tasks={state.tasks} />

      <El.BoardSection
        hasSidebar={state.tasks.length > 0 ? true : false}
        className="animated fadeIn"
      >
        <El.BoardTitle>
          <Typography variant="body2" color="textSecondary" component="h3">
            Online Members: <b>{state.membersOnline.length}</b>
          </Typography>

          <El.ShareButtonContainer>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="share-room-link">Share Room Link</InputLabel>
              <OutlinedInput
                id="share-room-link"
                type={"text"}
                value={window.location.href}
                onChange={() => false}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        const text = document.getElementById("share-room-link");
                        /* Select the text field */
                        text.select();
                        text.setSelectionRange(
                          0,
                          99999
                        ); /* For mobile devices */
                        navigator.clipboard.writeText(text.value);
                      }}
                      edge="end"
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Share Room Link"
              />
            </FormControl>
          </El.ShareButtonContainer>
        </El.BoardTitle>

        <El.BoardButtonValues>
          <ButtonGroup disableElevation color="primary" size="small">
            {state.options.map((item, idx) => (
              <Button
                key={idx}
                color={state.votes[user.uid] === item ? "secondary" : "primary"}
                variant={
                  state.votes[user.uid] === item ? "contained" : "outlined"
                }
                onClick={() => {
                  db.collection("rooms")
                    .doc(String(roomName))
                    .set(
                      {
                        votes: {
                          [user.uid]: item,
                        },
                      },
                      { merge: true }
                    )
                    .then(() => {
                      console.log("< update vote : done >");
                    });
                }}
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
        </El.BoardButtonValues>

        <El.BoardMembers>
          {state.membersOnline.length > 0 &&
            state.membersOnline
              .map((item, idx) => (
                <El.BoardCard key={idx} className="animated fadeIn">
                  <Card>
                    <El.BoardMembersImage>
                      <img
                        src={item.photo}
                        alt="user image"
                        title={`${item.name}`}
                      />
                    </El.BoardMembersImage>

                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {item.name}
                      </Typography>
                      {state.roomOwner === item.uid && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Owner <EmojiEventsIcon />
                        </Typography>
                      )}
                      {state.votes[item.uid] && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Voted <DoneIcon />
                        </Typography>
                      )}

                      {user.uid === item.uid &&
                        state.roomOwner === user.uid &&
                        !state.showVotes && (
                          <El.BoardCardButtonRevealVote>
                            <TextField
                              label="Task Name"
                              variant="outlined"
                              size="small"
                              onChange={(e) => updateTaskName(e.target.value)}
                            />

                            <Button
                              size="medium"
                              color="secondary"
                              variant="contained"
                              fullWidth
                              disabled={
                                state.membersOnline.length ===
                                Object.keys(state.votes).length
                                  ? false
                                  : true
                              }
                              onClick={() => {
                                if (state.taskName !== "") {
                                  db.collection("rooms")
                                    .doc(String(roomName))
                                    .update({
                                      tasks:
                                        firebase.firestore.FieldValue.arrayUnion(
                                          {
                                            name: String(state.taskName),
                                            average:
                                              Object.keys(state.votes).reduce(
                                                (acc, cur) =>
                                                  (acc =
                                                    acc +
                                                    (state.votes[cur] !== "?"
                                                      ? state.votes[cur]
                                                      : 0)),
                                                0
                                              ) /
                                              Object.keys(state.votes).length,
                                            date: new Date(),
                                          }
                                        ),
                                    });
                                }

                                db.collection("rooms")
                                  .doc(String(roomName))
                                  .set(
                                    {
                                      showVotes: true,
                                      taskName: "",
                                    },
                                    { merge: true }
                                  )
                                  .then(() => {
                                    console.log("< update showVotes : done >");
                                  });
                              }}
                            >
                              Reveal Votes
                            </Button>
                          </El.BoardCardButtonRevealVote>
                        )}

                      {user.uid === item.uid &&
                        state.roomOwner === user.uid &&
                        state.showVotes && (
                          <El.BoardCardButtonRevealVote>
                            <Button
                              size="medium"
                              color="secondary"
                              variant="outlined"
                              fullWidth
                              onClick={() => {
                                db.collection("rooms")
                                  .doc(String(roomName))
                                  .set(
                                    {
                                      showVotes: false,
                                      taskName: "",
                                      votes: {},
                                    },
                                    { merge: true }
                                  )
                                  .then(() => {
                                    console.log("< update showVotes : done >");
                                  });
                              }}
                            >
                              Reset Votes
                            </Button>
                          </El.BoardCardButtonRevealVote>
                        )}
                    </CardContent>
                    {state.showVotes && (
                      <CardActions>
                        <Button
                          size="large"
                          color="primary"
                          variant="outlined"
                          fullWidth
                        >
                          {state.votes[item.uid]}
                        </Button>
                      </CardActions>
                    )}
                  </Card>
                </El.BoardCard>
              ))
              .reverse()}
        </El.BoardMembers>
      </El.BoardSection>
    </El.BoardContainer>
  );
};

Board.propTypes = {
  user: PropTypes.object,
  roomName: PropTypes.string,
};

export default Board;
