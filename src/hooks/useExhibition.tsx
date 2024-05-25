'use client'

import { GridColDef } from '@mui/x-data-grid'
import { exhibitions } from '@/mocks/data/exhibitions'
import { useParams } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { Artist, Exhibition } from '@/types'
import { useAppSelector } from '@/effects/store'

export const useExhibition = () => {
  const { id } = useParams()
  const { list: exhibitions } = useAppSelector((state) => state.exhibition)
  const isNew = id === 'new'

  const columns: GridColDef<Exhibition>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => (
        <TableActions viewPath={`/dashboard/exhibition/${params.row.id}`} onClickDelete={() => {}} />
      )
    },
    { field: 'exhibitionType', headerName: 'Mode', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 200,
      valueFormatter: (params) => new Date(params).toLocaleDateString()
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      width: 200,
      valueFormatter: (params) => new Date(params).toLocaleDateString()
    }
  ]
  return { columns, exhibitions, id, isNew }
}
