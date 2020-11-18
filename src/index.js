import React from 'react'
import ReactDOM from 'react-dom'

/** firebase */
import firebase from 'firebase/app'
import { credentials } from './credentials'
console.log('< CREDENTIAL > ', credentials)
/** routes */
import Routes from './routes/Routes'

/** style */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from './assets/style'


ReactDOM.render(
  <React.StrictMode>

    <GlobalStyle />

    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)
