import './App.css'
import Home from './pages/home'
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography:{fontFamily:[
    'Almarai'
  ]},
  palette:{
    primary:{
      main:'#6200ea'
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
