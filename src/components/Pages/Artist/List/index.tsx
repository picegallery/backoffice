'use client'
import { FC, useEffect } from 'react'
import DataTable from '@/components/DataTable/DataTable'
import { useArtist, useCommon } from '@/hooks'
import Card from '@/components/Card/Card'
import { useAppDispatch } from '@/effects/store'
import { getArtists } from '@/effects/actions'

const ArtistList: FC = () => {
  const dispatch = useAppDispatch()
  useCommon({ title: 'Artists' })
  const { columns, artists } = useArtist()

  useEffect(() => {
    dispatch(getArtists())
  }, [dispatch])

  return (
    <div data-testid='dashboard-artist-list'>
      <Card>
        <DataTable columns={columns} rows={artists} />
      </Card>
    </div>
  )
}

export default ArtistList
