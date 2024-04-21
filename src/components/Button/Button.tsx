import { FC, PropsWithChildren } from 'react'
import { Button as ButtonMUI, ButtonProps as ButtonMUIProps } from '@mui/material'

export type ButtonProps = PropsWithChildren<ButtonMUIProps>

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonMUI 
    {...rest} variant='contained'
      sx={{
        backgroundColor: '#006E7A',
        color: '#FFFFFF', 
        borderRadius: '4px',
        padding: '6px 16px', 
        '&:hover': {
        backgroundColor: '#6FC6BC',
                  },
        }}
        data-testid='button-component'>
      {children}
    </ButtonMUI>
  )
}

export default Button
