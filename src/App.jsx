import './App.css'
import Home from './pages/home'
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography:{fontFamily:[
    'Almarai'
  ]}
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App
