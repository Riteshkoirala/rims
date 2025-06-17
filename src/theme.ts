import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Gold/Yellow from logo
      light: '#FFEE58',
      dark: '#FBC02D',
      contrastText: '#000000', // Black text on yellow
    },
    secondary: {
      main: '#8B0000', // Dark Red/Maroon from logo
      light: '#B71C1C',
      dark: '#570000',
      contrastText: '#ffffff', // White text on maroon
    },
    info: {
      main: '#1565C0', // A shade of blue from the logo
      light: '#42A5F5',
      dark: '#0D47A1',
      contrastText: '#ffffff', // White text on blue
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Open Sans", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

export default theme; 