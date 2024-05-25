'use client'
import DataTable from '@/components/DataTable/DataTable'
import { useExhibition } from '@/hooks/useExhibition'
import { FC } from 'react'

type ArtistExhibitionSectionProps = {}
const ArtistExhibitionSection: FC<ArtistExhibitionSectionProps> = ({}) => {
  const { columns } = useExhibition()
  return (
    <div data-testid='dashboard-artist-exhibition-section'>
      <DataTable columns={columns} rows={[]} />
    </div>
  )
}

export default ArtistExhibitionSection
