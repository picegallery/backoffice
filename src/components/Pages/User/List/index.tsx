'use client'
import { FC, useEffect } from 'react'
import DataTable from '@/components/DataTable/DataTable'
import { useUsers, useCommon } from '@/hooks'
import Card from '@/components/Card/Card'
import { getUsersAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'

const UserList: FC = () => {
  const dispatch = useAppDispatch()
  useCommon({ title: 'Users' })
  const { columns, users } = useUsers()

  useEffect(() => {
    dispatch(getUsersAction())
  }, [dispatch])

  return (
    <div data-testid='dashboard-user-list'>
      <Card>
        <DataTable columns={columns} rows={users} />
      </Card>
    </div>
  )
}

export default UserList