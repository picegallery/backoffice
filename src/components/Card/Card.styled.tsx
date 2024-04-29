'use client'
import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardStyled = styled(Paper)(({ theme }) => ({
  height: 'auto',
  padding: theme.spacing(2),
}));
