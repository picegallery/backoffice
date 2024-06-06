'use client'

import { useEffect } from 'react'
import { GridColDef } from '@mui/x-data-grid'
import { useParams } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { User } from '@/types'
import { useAppSelector, useAppDispatch } from '@/effects/store'
import { getUsers } from '@/effects/actions/user'

export const useUsers = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { list: users, loading, errorMessage } = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const isNew = id === 'new'

  const columns: GridColDef<User>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => <TableActions viewPath={`/dashboard/user/${params.row.id}`} onClickDelete={() => {}} />
    },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Primeiro Nome', width: 130 },
    { field: 'lastName', headerName: 'Último Nome', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Função', width: 120 }
  ]

  return { columns, users, id, isNew, loading, errorMessage }
}
