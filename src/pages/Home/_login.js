import React from 'react'
/** components */
import Button from '@material-ui/core/Button'
/** icons */
import EmailIcon from '@material-ui/icons/Email'

const Login = ({loginMethod, changeState}) => (
  <Button
    variant='contained'
    color='secondary'
    size='large'
    startIcon={<EmailIcon />}
    onClick={() => {
      // setState({
      //   ...state,
      //   loading: true
      // })
      changeState({loading: true})
      loginMethod()
    }}
  >
    login google
  </Button>
)

export default Login