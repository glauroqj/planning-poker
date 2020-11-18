import React, { useState, createContext } from 'react'
/** services */
import {
  fetchUserService, 
  loginService
} from 'services/session'

const SessionContext = createContext({
  user: {} /** default values */
})

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const loginMethod = () => {}

  const logoutMethod = () => {}

  const checkUserLogin = () => {}

  return (
    <SessionContext.Provider value={{ user, checkUserLogin, loginMethod, logoutMethod }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
