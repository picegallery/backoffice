'use client'
import { FC } from 'react'
import DataTable from '@/components/DataTable/DataTable'
import { useArtist, useCommon } from '@/hooks'
import Card from '@/components/Card/Card'

const ArtistList: FC = () => {
  useCommon({ title: 'Artists' })
  const { columns, artists } = useArtist()

  return (
    <div data-testid='dashboard-artist-list'>
      <Card>
        <DataTable columns={columns} rows={artists} />
      </Card>
    </div>
  )
}

export default ArtistList
