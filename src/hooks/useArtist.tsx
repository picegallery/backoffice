'use client'

import { GridColDef } from '@mui/x-data-grid'
import { artists } from '@/mocks/data/artists'
import { useParams } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { Artist } from '@/types'

export const useArtist = () => {
  const { id } = useParams()

  const isNew = id === 'new'

  const columns: GridColDef<Artist>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => <TableActions viewPath={`/dashboard/artist/${params.row.id}`} onClickDelete={() => {}} />
    },
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`
    },
    { field: 'artisticName', headerName: 'Artistic name', width: 130 }
  ]
  return { columns, artists, id, isNew }
}
