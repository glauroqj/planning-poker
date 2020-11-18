import React from 'react'
import ReactDOM from 'react-dom'

/** firebase */
// import firebase from 'firebase/app'
import credentials from './credentials'
/** routes */
import Routes from './routes/Routes'

/** style */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from './assets/style'

console.log('< CREDENTIAL > ', credentials)

ReactDOM.render(
  <React.StrictMode>

    <GlobalStyle />

    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
)
