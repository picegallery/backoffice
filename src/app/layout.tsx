import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Montserrat } from 'next/font/google'
import { FC, ReactNode } from 'react'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Layout from '@/components/Layout/Layout'
import dynamic from 'next/dynamic'

const montserrat = Montserrat({ subsets: ['latin'] })

const ReduxProvider = dynamic(() => import('@/effects/store/reduxProvider'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Pice Gallery Backoffice',
  description: 'Pice Gallery Backoffice'
}

type RootLayoutProps = {
  children: ReactNode
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <ReduxProvider>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <Layout>{children}</Layout>
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout
