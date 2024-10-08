import type { Metadata } from 'next'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Montserrat } from 'next/font/google'
import { FC, ReactNode, Suspense } from 'react'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Layout from '@/components/Layout/Layout'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoader } from '@/hooks/useLoader'
import Loader from '@/components/Loader/Loader'

const montserrat = Montserrat({ subsets: ['latin'] })

const ReduxProvider = dynamic(() => import('@/effects/store/reduxProvider'), {
  ssr: false
})

type RootLayoutProps = {
  children: ReactNode
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {

  return (
    <html lang='en'>
      <body className={montserrat.className}>
      <Suspense fallback={<div>loading</div>}>
        <ReduxProvider>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <Layout>{children}</Layout>
              <ToastContainer />
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </ReduxProvider>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
