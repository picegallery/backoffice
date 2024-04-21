'use client'
import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './theme'
import Button from '../Button/Button'

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Button>Custom Button</Button>
        {children}
        </div>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}