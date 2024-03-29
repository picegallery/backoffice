import { FC, PropsWithChildren } from 'react'
import { Button as ButtonMUI, ButtonProps as ButtonMUIProps } from '@mui/material'

type ButtonProps = PropsWithChildren & ButtonMUIProps

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonMUI {...rest} variant='outlined' data-testid='button-component'>
      {children}
    </ButtonMUI>
  )
}

export default Button
