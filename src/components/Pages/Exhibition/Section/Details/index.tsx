'use client'
import { InputDate } from '@/components/Input'
import InputImage from '@/components/Input/Image/InputImage'
import InputSelect from '@/components/Input/Select/InputSelect'
import InputText from '@/components/Input/Text/InputText'
import InputTextarea from '@/components/Input/Textarea/InputTextarea'
import { useCommon } from '@/hooks'
import { ExhibitionFormValues } from '@/types'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { Control, useForm } from 'react-hook-form'

type ExhibitionDetailsSectionProps = {
  viewMode: boolean;
  control: Control<ExhibitionFormValues>
}
const ExhibitionDetailsSection: FC<ExhibitionDetailsSectionProps> = ({ viewMode, control }) => {
  const { modes } = useCommon()
  return (
    <div data-testid='dashboard-artist-profile-section'>
      <Grid container spacing={1} rowSpacing={2}>
        <Grid item xs={12} md={6}>
          <InputText name='title' control={control} label='Title' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputSelect name='exhibitionType' control={control} label='Mode' items={modes} disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputDate name='startDate' control={control} label='Start Date' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputDate name='endDate' control={control} label='End Date' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={8}>
          <InputTextarea name='description' control={control} label='Description' disabled={viewMode} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputImage name='bannerUrl' control={control} disabled={viewMode} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ExhibitionDetailsSection
