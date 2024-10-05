'use client'
import { useAppSelector } from '@/effects/store'
export const useLoader = () => {
  const authLoading = useAppSelector((state) => state.auth.loading)
  const artistLoading = useAppSelector((state) => state.artist.loading)
  const userLoading = useAppSelector((state) => state.user.loading)
  const exhibitionLoading = useAppSelector((state) => state.exhibition.loading)

  const isLoading = authLoading || artistLoading || userLoading || exhibitionLoading
  return { isLoading }
}
