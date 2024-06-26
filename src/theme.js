import { createTheme, responsiveFontSizes } from '@mui/material/styles'
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#111',
      white: '#fff'
    },
    primary: {
      main: '#111'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: 'rgba(1, 1, 1, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
    background: {
      firstBackgroundColor: 'hsl(207, 26%, 17%)',
      secondBackgroundColor: 'hsl(209, 23%, 22%)',
      navBarBackgroundColor: '#111'
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightBold: '700',
    fontWeightMedium: '500',
    fontWeightRegular: '400',
    fontWeightLight: '300',
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '42px'
    },
    h3: {
      fontSize: '38px'
    },
    h4: {
      fontSize: '32px'
    },
    h5: {
      fontSize: '28px'
    },
    h6: {
      fontSize: '22px'
    },
    subtitle1: {
      fontSize: '24px'
    },
    body1: {
      fontSize: '20px',
      letterSpacing: '0.3px'
    },
    body2: {
      fontSize: '16px'
    },
    button: {
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing: '1.3px'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
        }
      }
    }
  }

})

export default responsiveFontSizes(theme)
