import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Layout from '@/components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pice Gallery Back Office',
  description: 'Pice Gallery Back Office'
}

type RootLayoutProps = {
  children: ReactNode
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Layout>{children}</Layout>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
