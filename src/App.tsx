import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { IssueProvider } from "./context/IssuesContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <IssueProvider>

          <Router />

        </IssueProvider>

      </BrowserRouter>
    </ThemeProvider>

  )
}

