import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const roboto = Roboto({
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
      main: brandColors.primary
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: grey[200]
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
