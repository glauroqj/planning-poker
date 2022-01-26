import React from "react";
import ReactDOM from "react-dom";

/** firebase */
import credentials from "./credentials";
import firebase from "firebase/compat/app";
/** routes */
import AppRoutes from "./routes/AppRoutes";

/** style */
import { ThemeProvider as ThemeProviderMaterialUI } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme, ThemeMaterialUI } from "assets/style";

/** provider */
import { SessionProvider } from "providers/Session";

/** start */
firebase.initializeApp(credentials);

const appTree = (
  <React.StrictMode>
    <GlobalStyle />

    <ThemeProviderMaterialUI theme={ThemeMaterialUI}>
      <ThemeProvider theme={Theme}>
        <SessionProvider>
          <AppRoutes />
        </SessionProvider>
      </ThemeProvider>
    </ThemeProviderMaterialUI>
  </React.StrictMode>
);

ReactDOM.render(appTree, document.getElementById("root"));
