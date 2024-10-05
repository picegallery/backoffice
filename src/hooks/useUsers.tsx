'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'
import { GridColDef } from '@mui/x-data-grid'
import { useParams, useRouter } from 'next/navigation'
import TableActions from '@/components/TableActions/TableActions'
import { User, UserFormValues, UserFormValuesToApi } from '@/types'
import { useAppSelector, useAppDispatch } from '@/effects/store'
import { postUserAction } from '@/effects/actions'
import { roles } from '@/mocks/data/roles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setUserResetForm, setUserErrorMessage, setUserSuccessMessage } from '@/effects/store/slices'
import { useCommon } from './useCommon'

export const useUsers = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { push } = useRouter();
  const { toast } = useCommon();
  const { list: users, loading, errorMessage, successMessage, form, resetForm } = useAppSelector((state) => state.user)

  const schema = yup.object().shape({
    email: yup.string().required('E-mail is a required field'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Last name is a required field'),
    userType: yup.array().required('Role is a required field'),
  })

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    reset
  } = useForm<UserFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (errorMessage !== null) {
      const timer = setTimeout(() => {
        toast.error(errorMessage)
        dispatch(setUserErrorMessage(null))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [errorMessage, dispatch, toast])

  useEffect(() => {
    if (successMessage !== null) {
      const timer = setTimeout(() => {
        toast.success(successMessage)
        dispatch(setUserSuccessMessage(null))
        if(id === undefined) push(`/dashboard/user/${form.id}`)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [successMessage, dispatch, toast])

  useEffect(() => {
    if (resetForm === true) {
      reset({...form, userType: [form.userType]})
      dispatch(setUserResetForm(null))
    }
  }, [resetForm, dispatch])

  const columns: GridColDef<User>[] = [
    {
      field: 'actions',
      type: 'custom',
      headerName: '',
      width: 120,
      renderCell: (params) => <TableActions viewPath={`/dashboard/user/${params.row.id}`} onClickDelete={() => {}} />
    },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'userType', headerName: 'Function', width: 120 }
  ]

  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
    const userData: UserFormValuesToApi = {...data, userType: data.userType[0]}
    dispatch(postUserAction(userData))
  }

  return { columns, users, id, loading, errorMessage, roles, control, handleSubmit, setError, errors, onSubmit, form, reset }
}
