'use client'
import { FC } from 'react'
import { Grid } from '@mui/material'
import Card from '@/components/Card/Card'
import { useCommon, useExhibition } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import FormToolbar from '@/components/FormToolbar/FormToolbar'
import { useRouter } from 'next/navigation'
import ExhibitionDetailsSection from '../Section/Details'

type ExhibitionNewFormProps = {}
const ExhibitionNewForm: FC<ExhibitionNewFormProps> = ({}) => {
  useCommon({ title: 'Exhibition' })
  const {  handleSubmit, onSubmit, control } = useExhibition()
  const { push } = useRouter()

  const tabsForm: TabItem[] = [
    {
      label: 'Details',
      content: <ExhibitionDetailsSection viewMode={false} control={control} />
    }
  ]

  const onClickCancel = () => {
    push('/dashboard/exhibition/list')
  }

  return (
    <div data-testid='dashboard-exhibition-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Grid container>
            <FormToolbar
              showSave
              showCancel
              isNew={true}
              onClickCancel={() => onClickCancel()}
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

export default ExhibitionNewForm
