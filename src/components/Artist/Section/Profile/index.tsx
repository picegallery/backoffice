'use client'
import InputImage from '@/components/Input/Image/InputImage'
import InputSelect from '@/components/Input/Select/InputSelect'
import InputText from '@/components/Input/Text/InputText'
import InputTextarea from '@/components/Input/Textarea/InputTextarea'
import { useCommon } from '@/hooks'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

type ArtistProfileSectionProps = {}
const ArtistProfileSection: FC<ArtistProfileSectionProps> = ({}) => {
  const { control, register } = useForm()
  const { genders, nationalities } = useCommon()

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
          <InputSelect name='gender' control={control} label='Gender' items={genders} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputSelect
            name='nationalities'
            control={control}
            label='Nationalities'
            items={nationalities}
            multiple
            value={[]}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <InputTextarea name='biography' control={control} label='Biography' />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputImage name='photo' control={control} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ArtistProfileSection
