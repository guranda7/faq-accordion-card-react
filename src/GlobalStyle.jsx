
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
    html {
        font-size: 62.5%;
    }

  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%)
  }

`

export default GlobalStyles;