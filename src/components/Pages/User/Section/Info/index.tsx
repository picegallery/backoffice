'use client'
import InputSelect from '@/components/Input/Select/InputSelect'
import InputText from '@/components/Input/Text/InputText'
import { useUsers } from '@/hooks'
import { UserFormValues } from '@/types'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { Control } from 'react-hook-form'

type UserInfoSectionProps = {
  viewMode: boolean,
  control: Control<UserFormValues>
}
const UserInfoSection: FC<UserInfoSectionProps> = ({ viewMode, control }) => {
  const { roles } = useUsers()

  return (
    <div data-testid='dashboard-artist-profile-section'>
      <Grid container spacing={1} rowSpacing={2}>
        <Grid item xs={12} md={4}>
          <InputText name='firstName' control={control} label='First Name' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputText name='lastName' control={control} label='Last Name' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputSelect name='userType' control={control} label='Role' items={roles} disabled={viewMode} multiple={false} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputText name='email' control={control} label='E-mail' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputText name='password' control={control} label='Password' type='password' disabled={viewMode} />
        </Grid>
      </Grid>
    </div>
  )
}

export default UserInfoSection
