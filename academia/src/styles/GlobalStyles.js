// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth; /* Garante rolagem suave para âncoras */
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  /* Media Query para telas menores que 768px (tablets e celulares) */
  @media (max-width: 768px) {
    body {
      font-size: 90%; /* Reduz o tamanho da fonte base */
    }
  }

  /* Media Query para telas menores que 480px (celulares) */
  @media (max-width: 480px) {
    body {
      font-size: 85%; /* Reduz ainda mais para celulares */
    }
  }
`;

export default GlobalStyles;