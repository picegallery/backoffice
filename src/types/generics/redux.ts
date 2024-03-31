import { RootState } from '@/effects/store'
import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export interface ActionDispatch<T> {
  type: string
  payload: T
}

// P = params R = return (success or error)
export type IDispatch<P, R> = ThunkDispatch<RootState, P, ActionDispatch<R>>
