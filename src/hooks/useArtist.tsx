'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { GridColDef } from '@mui/x-data-grid'
import { useParams, useRouter } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { Artist, ArtistFormValues } from '@/types'
import { useAppDispatch, useAppSelector } from '@/effects/store'
import { useCommon } from './useCommon'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setArtistErrorMessage, setArtistResetForm, setArtistSuccessMessage } from '@/effects/store/slices'
import { postArtistAction } from '@/effects/actions'

export const useArtist = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { push } = useRouter()
  const { toast } = useCommon()
  const {
    list: artists,
    loading,
    errorMessage,
    successMessage,
    form,
    resetForm
  } = useAppSelector((state) => state.artist)

  const schema = yup.object().shape({
    email: yup.string().required('E-mail is a required field'),
    artisticName: yup.string().required('Artist name is a required field'),
    ['user.firstName']: yup.string().required('First name is a required field'),
    ['user.lastName']: yup.string().required('Last name is a required field')
  })

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    reset
  } = useForm<ArtistFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (errorMessage !== null) {
      const timer = setTimeout(() => {
        toast.error(errorMessage)
        dispatch(setArtistErrorMessage(null))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [errorMessage, dispatch, toast])

  useEffect(() => {
    if (successMessage !== null) {
      const timer = setTimeout(() => {
        toast.success(successMessage)
        dispatch(setArtistSuccessMessage(null))
        if (id === undefined) push(`/dashboard/artist/${form.id}`)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [successMessage, dispatch, toast])

  useEffect(() => {
    if (resetForm === true) {
      reset(form)
      dispatch(setArtistResetForm(null))
    }
  }, [resetForm, dispatch])

  const isNew = id === 'new'

  const columns: GridColDef<Artist>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => <TableActions viewPath={`/dashboard/artist/${params.row.id}`} onClickDelete={() => {}} />
    },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row?.user?.firstName || ''} ${row?.user?.lastName || ''}`
    },
    { field: 'artistName', headerName: 'Artistic name', width: 130 },
    { field: 'email', headerName: 'Email', valueGetter: (value, row) => row?.user?.email || '', width: 200 }
  ]

  const onSubmit: SubmitHandler<ArtistFormValues> = (data) => {
    dispatch(postArtistAction(data))
  }

  return { columns, artists, id, isNew, control, handleSubmit, setError, errors, onSubmit, form, reset, loading }
}
