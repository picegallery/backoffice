'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { GridColDef } from '@mui/x-data-grid'
import { useParams, useRouter } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { Exhibition, ExhibitionFormValues, ExhibitionFormValuesToApi } from '@/types'
import { useAppDispatch, useAppSelector } from '@/effects/store'
import { SubmitHandler, useForm } from 'react-hook-form'
import { postExhibitionAction } from '@/effects/actions'
import { useEffect } from 'react'
import {
  setExhibitionErrorMessage,
  setExhibitionResetForm,
  setExhibitionSuccessMessage,
  setUserResetForm
} from '@/effects/store/slices'
import { useCommon } from './useCommon'
import dayjs from 'dayjs'

export const useExhibition = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { push } = useRouter()
  const { toast } = useCommon()
  const {
    list: exhibitions,
    form,
    errorMessage,
    successMessage,
    resetForm,
    loading
  } = useAppSelector((state) => state.exhibition)

  const schema = yup.object().shape({
    title: yup.string().required('Title is a required field'),
    startDate: yup.string().required('Start Date is a required field'),
    endDate: yup.string().required('End Date is a required field'),
    exhibitionType: yup.array().required('Exhibition Type is a required field'),
    description: yup.string().required('Description is a required field')
  })

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    reset
  } = useForm<ExhibitionFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (errorMessage !== null) {
      const timer = setTimeout(() => {
        toast.error(errorMessage)
        dispatch(setExhibitionErrorMessage(null))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [errorMessage, dispatch, toast])

  useEffect(() => {
    if (successMessage !== null) {
      const timer = setTimeout(() => {
        toast.success(successMessage)
        dispatch(setExhibitionSuccessMessage(null))
        if (id === undefined) push(`/dashboard/exhibition/${form.id}`)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [successMessage, dispatch, toast, form.id, push, id])

  useEffect(() => {
    if (resetForm === true) {
      reset()
      dispatch(setExhibitionResetForm(null))
    }
  }, [resetForm, dispatch, reset])

  const columns: GridColDef<Exhibition>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => (
        <TableActions viewPath={`/dashboard/exhibition/${params.row.id}`} onClickDelete={() => {}} />
      )
    },
    { field: 'exhibitionType', headerName: 'Mode', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 200,
      valueFormatter: (params) => new Date(params).toLocaleDateString()
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      width: 200,
      valueFormatter: (params) => new Date(params).toLocaleDateString()
    }
  ]

  const onSubmit: SubmitHandler<ExhibitionFormValues> = (data) => {
    const formData: ExhibitionFormValuesToApi = {
      ...data,
      exhibitionType: data.exhibitionType[0],
      startDate: dayjs(data.startDate).toISOString(),
      endDate: dayjs(data.endDate).toISOString(),
      bannerUrl: 'TODO REMOVE IT'
    }
    dispatch(postExhibitionAction(formData))
  }

  return { columns, exhibitions, id, control, handleSubmit, setError, errors, onSubmit, form, reset, loading }
}
