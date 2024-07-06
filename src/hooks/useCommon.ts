'use client'
import { Item } from '@/components/Input/Select/InputSelect'
import { useAppSelector } from '@/effects/store'
import { setCurrentTitle } from '@/effects/store/slices'
import { countries } from '@/mocks/data/countries'
import { genders } from '@/mocks/data/genders'
import { modes } from '@/mocks/data/modes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

type CommonProps = {
  title?: string
}
export const useCommon = ({ title = '' }: CommonProps = {}) => {
  const dispatch = useDispatch()
  const { currentTitle } = useAppSelector((state) => state.common)
  useEffect(() => {
    if (currentTitle !== title && title !== '') dispatch(setCurrentTitle(title))
  })

  const nationalities = countries.map((country): Item => {
    const { en_short_name, nationality, alpha_3_code } = country
    return { label: `${en_short_name} - ${nationality}`, value: alpha_3_code }
  })

  return { currentTitle, nationalities, genders, modes }
}
