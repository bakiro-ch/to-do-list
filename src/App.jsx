import { blue } from '@mui/material/colors';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import Home from './pages/home'

import './App.css'


const theme = createTheme({
  typography:{fontFamily:[
    'Almarai'
  ]},
  palette:{
    primary:{
      main:blue['A200']
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App
