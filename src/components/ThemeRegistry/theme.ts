import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const brandColors = {
  primary: '#006E7A',
  secondary: '#6FC6BC',
  tertiary: '#F7DEB5',
  quaternary: '#5C2A2B',
  quinary: '#EF9072'
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#006E7A',
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: blueGrey [200]
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa'
          })
        })
      }
    }
  }
})

export default theme
