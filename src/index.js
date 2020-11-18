import React from 'react'
import ReactDOM from 'react-dom'

/** firebase */
import firebase from 'firebase/app'
import credentials from './credentials'
/** routes */
import Routes from './routes/Routes'

/** style */
import { ThemeProvider as ThemePRoviderMaterialUI } from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme, ThemeMaterialUI } from './assets/style'


/** start */
firebase.initializeApp(credentials)

ReactDOM.render(
  <React.StrictMode>

    <GlobalStyle />

    <ThemePRoviderMaterialUI theme={ThemeMaterialUI}>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </ThemePRoviderMaterialUI>

  </React.StrictMode>,
  document.getElementById('root')
)
