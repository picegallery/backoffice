import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '4px',
  padding: '8px 16px',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main, // Altere para a cor secundária definida no tema
  },

}))