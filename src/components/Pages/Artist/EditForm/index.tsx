'use client'
import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import Card from '@/components/Card/Card'
import { useArtist } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import FormToolbar from '@/components/FormToolbar/FormToolbar'
import ArtistArtworksSection from '../Section/Artworks'
import ArtistExhibitionSection from '../Section/Exhibitions'
import ArtistProfileSection from '../Section/Profile'
import { useRouter } from 'next/navigation'

type ArtistEditFormProps = {}
const ArtistEditForm: FC<ArtistEditFormProps> = ({}) => {
  const { isNew } = useArtist()
  const { handleSubmit } = useForm()
  const { push } = useRouter()

  const [viewMode, setViewMode] = useState(!isNew)

  const tabsForm: TabItem[] = [
    {
      label: 'Profile',
      content: <ArtistProfileSection viewMode={viewMode} />
    },
    {
      label: 'Artworks',
      content: <ArtistArtworksSection />,
      disabled: isNew
    },
    {
      label: 'Exhibitions',
      content: <ArtistExhibitionSection />,
      disabled: isNew
    }
  ]

  const onClickCancel = (viewMode: boolean) => {
    setViewMode(!viewMode)
    isNew && push('/dashboard/artist/list')
  }

  const onClickEdit = (viewMode: boolean) => {
    setViewMode(!viewMode)
  }

  return (
    <div data-testid='dashboard-artist-form'>
      <form onSubmit={handleSubmit((data) => console.log('data', data))}>
        <Card>
          <Grid container>
            <FormToolbar
              showSave
              showCancel
              showEdit
              isNew={isNew}
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

export default ArtistEditForm
