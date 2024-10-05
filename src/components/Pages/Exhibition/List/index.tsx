'use client'
import { FC, useEffect } from 'react'
import DataTable from '@/components/DataTable/DataTable'
import { useExhibition, useCommon } from '@/hooks'
import Card from '@/components/Card/Card'
import { getExhibitionsAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'

const ExhibitionList: FC = () => {
  const dispatch = useAppDispatch()
  useCommon({ title: 'Exhibition' })
  const { columns, exhibitions } = useExhibition()

  useEffect(() => {
    dispatch(getExhibitionsAction())
  }, [dispatch])

  return (
    <div data-testid='dashboard-artist-list'>
      <Card>
        <DataTable columns={columns} rows={exhibitions} />
      </Card>
    </div>
  )
}

export default ExhibitionList
