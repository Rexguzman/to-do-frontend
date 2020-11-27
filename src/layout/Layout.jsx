import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../style/global';
import { lightTheme, darkTheme } from '../style/theme';
import { ToggleButton } from '../components'
import { useDarkMode } from '../hooks/useDarkMode.js';


const Layout = (props) => {
    const DarkMode = useDarkMode();
  
  return (
    <ThemeProvider theme={DarkMode.theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <div>
          <ToggleButton toggleTheme={DarkMode.toggleTheme}/>
          {props.children}
        </div>
      </>
    </ThemeProvider>
  );
}

export default Layout;