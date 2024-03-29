'use client'

import { GridColDef } from '@mui/x-data-grid'
import { artists } from '@/mocks/data/artists'

export const useArtist = () => {
  const columns: GridColDef[] = [
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
  return { columns, artists }
}
