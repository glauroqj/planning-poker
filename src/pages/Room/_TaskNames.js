import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
/** components */
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
/** style */
import * as El from './Room.style'

const Sidebar = ({tasks}) =>
  useMemo(() => (
    <El.BoardTaskNameSection isVisible={tasks.length > 0 ? true : false}>
      <El.BoardTitle>
        <Typography variant="body2" color="textSecondary" component="h3">
          Voted Tasks
        </Typography>
      </El.BoardTitle>
      <El.BoardTaskNameBody>
      {tasks.length > 0 && (
          <ul>
            {tasks.map((item, idx) => (
              <El.BoardTaskNameList key={idx} className='animated fadeInLeft'>
                
                <El.TaskName><span>Name:</span> {item.name}</El.TaskName>
                <El.TaskInformation>
                  <El.TaskAverage><span>Avg:</span> {item.average}</El.TaskAverage>
                  {item?.date && (
                    <El.TaskDate>{ item.date.toDate().toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'}) }</El.TaskDate>
                  )}
                </El.TaskInformation>

              </El.BoardTaskNameList>
            )).reverse()}
          </ul>
        )}
        {/* {tasks.length > 0 && (
          <List component="nav">
            {tasks.map((item, idx) => (
              <React.Fragment key={idx}>
                <ListItem className="animated fadeInLeft">
                  <ListItemText primary={item.name} secondary={item.average} />
                </ListItem>
                <Divider />
              </React.Fragment>
            )).reverse()}
          </List>
        )} */}
      </El.BoardTaskNameBody>
    </El.BoardTaskNameSection>
  ),[tasks]
)

Sidebar.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Sidebar