'use client'
import { FC, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Card from '@/components/Card/Card'
import { useUsers, useCommon } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import FormToolbar from '@/components/FormToolbar/FormToolbar'
import { useRouter } from 'next/navigation'
import UserInfoSection from '../Section/Info'
import { getUserAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'

type UserEditFormPropsProps = {}

const UserEditFormProps: FC<UserEditFormPropsProps> = ({}) => {
  useCommon({ title: 'User' })
  const dispatch = useAppDispatch()
  const { handleSubmit, control, onSubmit, id, reset, form } = useUsers()
  const [viewMode, setViewMode] = useState(true)

  const resetToInitialValues = () => {
    reset({...form, userType: [form.userType]})
  }
  useEffect(() => {
    resetToInitialValues()
  }, [])

  useEffect(() => {
      dispatch(getUserAction(id as string))
  }, [dispatch, id])

  const tabsForm: TabItem[] = [
    {
      label: 'Info',
      content: <UserInfoSection viewMode={viewMode} control={control} />
    },
  ]

  const onClickCancel = (viewMode: boolean) => {
    setViewMode(!viewMode)
    resetToInitialValues();
  }

  const onClickEdit = (viewMode: boolean) => {
    setViewMode(!viewMode)
  }

  return (
    <div data-testid='dashboard-user-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Grid container>
            <FormToolbar
              showSave
              showCancel
              showEdit
              isNew={false}
              onClickCancel={(viewMode: boolean) => onClickCancel(viewMode)}
              onClickEdit={(viewMode: boolean) => onClickEdit(viewMode)}
            />
            <Grid item xs={12}>
              <Tabs items={tabsForm} />
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  )
}

export default UserEditFormProps
