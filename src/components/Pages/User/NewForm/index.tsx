'use client'
import { FC, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Card from '@/components/Card/Card'
import { useUsers, useCommon } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import FormToolbar from '@/components/FormToolbar/FormToolbar'
import { useRouter } from 'next/navigation'
import UserInfoSection from '../Section/Info'

type UserNewFormProps = {}

const UserNewForm: FC<UserNewFormProps> = ({}) => {
  useCommon({ title: 'User' })
  const { handleSubmit, control, onSubmit, reset } = useUsers()
  const { push } = useRouter()

  useEffect(() => {
    reset();
  }, []);

  const tabsForm: TabItem[] = [
    {
      label: 'Info',
      content: <UserInfoSection viewMode={false} control={control} />
    },
  ]

  const onClickCancel = () => {
    push('/dashboard/user/list')
  }
  
  return (
    <div data-testid='dashboard-user-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Grid container>
            <FormToolbar
              showSave
              showCancel
              isNew={true}
              onClickCancel={(viewMode: boolean) => onClickCancel()}
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

export default UserNewForm
