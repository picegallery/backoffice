'use client'
import { useAppSelector } from '@/store'
import { setCurrentTitle } from '@/store/slices'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

type CommonProps = {
  title?: string
}
export const useCommon = ({ title = '' }: CommonProps = {}) => {
  const dispatch = useDispatch()
  const { currentTitle } = useAppSelector((state) => state.common)
  useEffect(() => {
    if (currentTitle !== title && title !== '') dispatch(setCurrentTitle(title))
  })

  return { currentTitle }
}
