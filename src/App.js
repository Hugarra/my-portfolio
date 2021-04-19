import React, { useState } from 'react';

import Navbar from "./components/Navbar.jsx"
import Landing from "./components/Landing.jsx"

import './App.css';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme.js';
import { GlobalStyles } from './themes/global.js';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Navbar themeSwitch={setDarkMode} theme={darkMode}/>
        <Landing></Landing>
      </>
    </ThemeProvider>
  );
}

export default App;
