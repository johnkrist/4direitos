import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #1c1c1c;
    color: #ffffff;
    line-height: 1.6;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;