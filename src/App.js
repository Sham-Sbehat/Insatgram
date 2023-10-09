import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import ResponsiveDrawer from './Components/Menu/Menu.jsx'
//import Messages from './Components/Messages/Messages';
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home.jsx';
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: ['Poppins', 'sans - serif'].join(',')
  }

});
export default function App() {
  return (

    <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    
      <Home/>
    </ThemeProvider>
  </div>

  )
}
