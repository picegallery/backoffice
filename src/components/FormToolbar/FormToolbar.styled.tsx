'use client'
import { styled } from '@mui/material/styles'

export const FormToolbarStyled = styled('div')`
  ${({ theme }) => `
    width: 100%;
    button {
      margin: ${theme.spacing()};
    }
  `}
`
