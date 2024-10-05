'use client'
import React, { FC, useEffect, useState, useCallback } from 'react'
import { Grid } from '@mui/material'
import Card from '@/components/Card/Card'
import { useUsers, useCommon } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import FormToolbar from '@/components/FormToolbar/FormToolbar'
import UserInfoSection from '../Section/Info'
import { getUserAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'

type UserEditFormProps = {}

const UserEditForm: FC<UserEditFormProps> = React.memo(() => {
  useCommon({ title: 'User' })
  const dispatch = useAppDispatch()
  const { handleSubmit, control, onSubmit, id, reset, form } = useUsers()
  const [viewMode, setViewMode] = useState(true)

  const resetToInitialValues = useCallback(() => {
    reset({ ...form, userType: [form.userType] })
  }, [form, reset]) // Use useCallback to memoize the function

  useEffect(() => {
    resetToInitialValues()
  }, [resetToInitialValues]) // Only depends on resetToInitialValues

  useEffect(() => {
    if (id) {
      dispatch(getUserAction(id as string))
    }
  }, [dispatch, id]) // Removed resetToInitialValues since it should only run when id changes

  const tabsForm: TabItem[] = [
    {
      label: 'Info',
      content: <UserInfoSection viewMode={viewMode} control={control} />
    }
  ]

  const onClickCancel = () => {
    setViewMode(true)
    resetToInitialValues()
  }

  const onClickEdit = () => {
    setViewMode(false)
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
              onClickCancel={onClickCancel}
              onClickEdit={onClickEdit}
            />
            <Grid item xs={12}>
              <Tabs items={tabsForm} />
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  )
})

// Set a display name for the memoized component
UserEditForm.displayName = 'UserEditForm'

export default UserEditForm
