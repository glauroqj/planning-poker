import React, { useMemo } from "react";
import PropTypes from "prop-types";
/** components */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
/** style */
import * as El from "./Room.style";

const Sidebar = ({ tasks }) =>
  useMemo(
    () => (
      <El.BoardTaskNameSection isVisible={tasks.length > 0 ? true : false}>
        <El.BoardTitle>
          <Typography variant="body2" color="textSecondary" component="h3">
            Voted Tasks
          </Typography>
        </El.BoardTitle>
        <El.BoardTaskNameBody>
          {tasks.length > 0 && (
            <ul>
              {tasks
                .map((item, idx) => (
                  <El.BoardTaskNameList
                    key={idx}
                    className="animated fadeInLeft"
                  >
                    <El.TaskName>
                      <span>Name:</span> {item.name}
                    </El.TaskName>
                    <El.TaskInformation>
                      <El.TaskAverage>
                        <span>Avg:</span> {item.average}
                      </El.TaskAverage>
                      {item?.date && (
                        <El.TaskDate>
                          {item.date
                            .toDate()
                            .toLocaleDateString("pt-BR", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                            })}
                        </El.TaskDate>
                      )}
                    </El.TaskInformation>
                  </El.BoardTaskNameList>
                ))
                .reverse()}
            </ul>
          )}
        </El.BoardTaskNameBody>
      </El.BoardTaskNameSection>
    ),
    [tasks]
  );

Sidebar.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Sidebar;
