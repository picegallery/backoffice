import { FC, PropsWithChildren } from 'react'
import { Button as ButtonMUI, ButtonProps as ButtonMUIProps } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export type ButtonProps = PropsWithChildren<ButtonMUIProps>

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const theme = createTheme();
  
  return (
    <ButtonMUI 
    {...rest} variant='contained'
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
      >
      {children}
    </ButtonMUI>
  )
}

export default Button
