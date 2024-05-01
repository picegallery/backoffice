import { styled } from '@mui/material/styles'
import { Button as ButtonMUI } from '@mui/material'
import { ButtonProps } from './Button'

export const ButtonStyled = styled(ButtonMUI)<ButtonProps>(({ theme, icon }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius || '4px',
  padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  },

  ...(icon && {
    minWidth: 35,
    height: 35,
    borderRadius: '50%',
    svg: {
      display: 'flex',
      justifyContent: 'center'
    }
  })
}))
