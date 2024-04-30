'use client'
import { FC } from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@/components/Card/Card'
import { useArtist, useCommon } from '@/hooks'
import Tabs, { TabItem } from '@/components/Tabs/Tabs'
import ArtistArtworksSection from '../Section/Artworks'
import ArtistExhibitionSection from '../Section/Exhibitions'
import ArtistProfileSection from '../Section/Profile'
import { useForm } from 'react-hook-form'

type ArtistFormProps = {}
const ArtistForm: FC<ArtistFormProps> = ({}) => {
  const { isNew } = useArtist()
  const { handleSubmit } = useForm()

  const tabsForm: TabItem[] = [
    {
      label: 'Profile',
      content: <ArtistProfileSection />
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

  return (
    <div data-testid='dashboard-artist-form'>
      <form onSubmit={handleSubmit((data) => console.log('data', data))}>
        <Card>
          <Grid container>
            <Grid item xs={12}>
              <Tabs items={tabsForm} />
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  )
}

export default ArtistForm
