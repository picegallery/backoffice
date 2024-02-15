'use client'
import { styled } from '@mui/material/styles'

export const MainStyled = styled('main')`
  ${({ theme }) => `
    height: auto;
    padding: ${theme.spacing()}
  `}
`
