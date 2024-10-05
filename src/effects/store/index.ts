import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { authReducer } from '@/effects/store/slices/authSlice'
import { artistReducer, commonReducer, exhibitionReducer, usersReducer } from './slices'

/**
 * Handle SSR environment. If window is undefined, use a noop storage.
 */
const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null)
  },
  setItem(_key: string, value: string) {
    return Promise.resolve(value)
  },
  removeItem() {
    return Promise.resolve()
  }
})

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

/**
 * Persist configuration for the `auth` slice only.
 */
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'], // Only persist the `auth` slice
}

/**
 * Combine reducers, with `auth` using `persistReducer`.
 */
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // Persist only the auth reducer
  common: commonReducer, // Do not persist other slices
  artist: artistReducer,
  exhibition: exhibitionReducer,
  user: usersReducer,
})

export const store = configureStore({
  reducer: rootReducer, // Use the root reducer
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const persistor = persistStore(store)
