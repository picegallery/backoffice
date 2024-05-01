'use client'
import { FC, useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@/components/Button/Button'
import { FormToolbarStyled } from './FormToolbar.styled'

type FormToolbarProps = {
  showCancel?: boolean
  showSave?: boolean
  showEdit?: boolean
  isNew?: boolean
  onClickCancel?: (viewMode: boolean) => void
  onClickEdit?: (viewMode: boolean) => void
}
const FormToolbar: FC<FormToolbarProps> = ({
  showCancel,
  showSave,
  showEdit,
  isNew = true,
  onClickCancel = () => {},
  onClickEdit = () => {}
}) => {
  const [isViewMode, setIsViewMode] = useState(!isNew)

  const handleOnClickEdit = () => {
    setIsViewMode(!isViewMode)
    onClickEdit(isViewMode)
  }

  const handleOnClickCancel = () => {
    setIsViewMode(!isViewMode)
    onClickCancel(isViewMode)
  }

  return (
    <FormToolbarStyled data-testid='form-toolbar'>
      <Grid container gap={1}>
        <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
          {showEdit && isViewMode && (
            <Button type='submit' onClick={handleOnClickEdit}>
              Edit
            </Button>
          )}
          {showCancel && !isViewMode && (
            <Button type='submit' onClick={handleOnClickCancel}>
              Cancel
            </Button>
          )}
          {showSave && !isViewMode && <Button type='button'>Save</Button>}
        </Grid>
      </Grid>
    </FormToolbarStyled>
  )
}

export default FormToolbar
