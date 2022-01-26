import React, { useState, useEffect, createContext, useContext } from "react";
/** services */
import {
  fetchUserService,
  loginService,
  logoutService,
} from "services/session";

const SessionContext = createContext({
  user: {} /** default values */,
});

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const loginMethod = async () => {
    const result = await loginService();
    console.log("< LOGIN METHOD > ", result);
    setUser(result);
  };

  const logoutMethod = async () => {
    await logoutService();
    setUser({});
  };

  const checkUserLogin = async () => {
    const result = await fetchUserService();
    console.log("< CHECK USER LOGIN > ", result);
    setUser(result);
  };

  return (
    <SessionContext.Provider
      value={{ user, checkUserLogin, loginMethod, logoutMethod }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }

  return context;
};

export { SessionContext, SessionProvider, useSession };
