import React, { useState, createContext } from 'react'

const SessionContext = createContext({
  user: {} /** default values */
})

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const loginMethod = () => {}

  const logoutMethod = () => {}

  return (
    <SessionContext.Provider value={{ user, loginMethod, logoutMethod }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
