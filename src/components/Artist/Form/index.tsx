'use client'
import { FC } from 'react'
import Card from '@/components/Card/Card'
import { useArtist, useCommon } from '@/hooks'

const ArtistForm: FC = () => {
  useCommon({ title: 'Artists Form' })
  const {} = useArtist()
  return (
    <div data-testid='dashboard-artist-list'>
      <Card>ArtistForm</Card>
    </div>
  )
}

export default ArtistForm
