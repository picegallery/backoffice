'use client'
import { useAppSelector } from '@/store'
export const useAuth = () => {
  const { logged } = useAppSelector((state) => state.auth)

  return { logged }
}
