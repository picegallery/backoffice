'use client'
import InputText from '@/components/Input/Text/InputText'
import InputTextarea from '@/components/Input/Textarea/InputTextarea'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

type ArtistProfileSectionProps = {}
const ArtistProfileSection: FC<ArtistProfileSectionProps> = ({}) => {
  const { control } = useForm()
  return (
    <div data-testid='dashboard-artist-profile-section'>
      <Grid container spacing={1} rowSpacing={2}>
        <Grid item xs={12} md={4}>
          <InputText name='firstName' control={control} label='First Name' />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputText name='lastName' control={control} label='Last Name' />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputText name='artisticName' control={control} label='Artistic Name' />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputText name='gender' control={control} label='Gender' />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputText name='nationality' control={control} label='Nationality' />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputTextarea name='biography' control={control} label='Biography' />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputText name='photo' control={control} label='Photo' />
        </Grid>
      </Grid>
    </div>
  )
}

export default ArtistProfileSection
