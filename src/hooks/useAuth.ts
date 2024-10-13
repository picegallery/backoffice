'use client'
import { useAppSelector } from '@/effects/store'
export const useAuth = () => {
  const { logged, errorMessage, loading, token, role } = useAppSelector((state) => state.auth)

  return { logged, errorMessage, loading, token, role }
}
