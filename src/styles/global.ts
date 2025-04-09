import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme["base-background"]};
    font-family: 'Nunito', 'sans-serif';
    line-height: 1.6;
    color: ${props => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }
  
`