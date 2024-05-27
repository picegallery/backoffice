'use client'

import { GridColDef } from '@mui/x-data-grid'
import { useParams } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { Artist } from '@/types'
import { useAppSelector } from '@/effects/store'

export const useArtist = () => {
  const { id } = useParams()
  const { list: artists } = useAppSelector((state) => state.artist)

  const isNew = id === 'new'

  const columns: GridColDef<Artist>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => <TableActions viewPath={`/dashboard/artist/${params.row.id}`} onClickDelete={() => {}} />
    },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row?.user?.firstName || ''} ${row?.user?.lastName || ''}`
    },
    { field: 'artistName', headerName: 'Artistic name', width: 130 },
    { field: 'email', headerName: 'Email', valueGetter: (value, row) => row?.user?.email || '', width: 200 }
  ]

  return { columns, artists, id, isNew }
}
