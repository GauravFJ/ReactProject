import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Routes from './components/Routes';

const themeInstance = {
  palette: {
    primary: {
      main: '#3ba5f0',
    },
  },
};
const theme = createMuiTheme(themeInstance);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
