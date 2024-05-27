'use client'
import DataTable from '@/components/DataTable/DataTable'
import { useArtwork } from '@/hooks/useArtwork'
import { FC } from 'react'

type ArtistArtworksSectionProps = {}
const ArtistArtworksSection: FC<ArtistArtworksSectionProps> = ({}) => {
  const { columns } = useArtwork()
  return (
    <div data-testid='dashboard-artist-artworks-section'>
      <DataTable columns={columns} rows={[]} />
    </div>
  )
}

export default ArtistArtworksSection
