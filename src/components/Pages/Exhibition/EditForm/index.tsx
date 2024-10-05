'use client'
import React, { FC, useEffect, useMemo, useState, useCallback } from 'react'
import { Grid } from '@mui/material'
import Card from '@/components/Card/Card'
import { useCommon, useExhibition } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import FormToolbar from '@/components/FormToolbar/FormToolbar'
import ExhibitionDetailsSection from '../Section/Details'
import { getExhibitionAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'

type ExhibitionEditFormProps = {}

// Define the functional component with a display name
const ExhibitionEditForm: FC<ExhibitionEditFormProps> = React.memo(() => {
  useCommon({ title: 'Exhibition' })
  const dispatch = useAppDispatch()
  const { handleSubmit, onSubmit, control, reset, id, form } = useExhibition()
  const [viewMode, setViewMode] = useState(true)
  console.log('form', form)

  useEffect(() => {
    if (id) {
      dispatch(getExhibitionAction(id as string))
    }
  }, [dispatch, id])

  // Memoize the tab items to prevent unnecessary re-renders
  const tabsForm: TabItem[] = useMemo(
    () => [
      {
        label: 'Details',
        content: <ExhibitionDetailsSection viewMode={viewMode} control={control} />
      }
    ],
    [viewMode, control]
  )

  // Reset form values when form is updated
  useEffect(() => {
    if (form) {
      reset({ ...form, exhibitionType: [form.exhibitionType] })
    }
  }, [form, reset])

  const onClickCancel = useCallback(() => {
    setViewMode(true)
  }, [])

  const onClickEdit = useCallback(() => {
    setViewMode(false)
  }, [])

  return (
    <div data-testid='dashboard-exhibition-form'>
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
ExhibitionEditForm.displayName = 'ExhibitionEditForm'

export default ExhibitionEditForm
