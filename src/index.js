import React from "react";
import ReactDOM from "react-dom";

/** firebase */
import { initializeApp } from "firebase/app";
import credentials from "./credentials";
/** routes */
import AppRoutes from "./routes/AppRoutes";

/** style */
import { ThemeProvider as ThemePRoviderMaterialUI } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme, ThemeMaterialUI } from "assets/style";

/** provider */
import { SessionProvider } from "providers/Session";

/** start */
initializeApp(credentials);

const appTree = (
  <React.StrictMode>
    <GlobalStyle />

    <ThemePRoviderMaterialUI theme={ThemeMaterialUI}>
      <ThemeProvider theme={Theme}>
        <SessionProvider>
          <AppRoutes />
        </SessionProvider>
      </ThemeProvider>
    </ThemePRoviderMaterialUI>
  </React.StrictMode>
);

ReactDOM.render(appTree, document.getElementById("root"));
