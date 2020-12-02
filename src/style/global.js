import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.font};
    transition: all 0.25s linear;
    text-rendering: optimizeLegibility;
    font-family: 'Open Sans', sans-serif;
    
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 5px;
      
}
 
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.nav};
  outline: 1px solid slategrey;
}

input, textarea {
  font-family: 'Open Sans', sans-serif;
}

button {
  outline: none;
}
`
export const StyledContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:content;
    height:97vh;
`