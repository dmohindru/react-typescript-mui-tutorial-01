import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiExamples } from './components/MuiExamples';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]

    }
  }
});
function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
      
      <MuiExamples />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
