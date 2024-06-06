'use client'

import { Provider } from 'react-redux'
import { store } from './index'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store)

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}