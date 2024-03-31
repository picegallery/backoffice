'use client'
import { useAppSelector } from '@/effects/store'
export const useAuth = () => {
  const { logged } = useAppSelector((state) => state.auth)

  return { logged }
}
