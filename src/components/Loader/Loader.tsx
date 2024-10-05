import { FC } from 'react'
import { LoaderStyled} from './Loader.styled'
import { CircularProgress } from '@mui/material'

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return <LoaderStyled data-testid='loader-component'><CircularProgress size={100} color='secondary'/></LoaderStyled>
}

export default Loader
