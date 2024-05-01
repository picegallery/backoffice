'use client'
import { styled } from '@mui/material/styles'

export const TableActionsStyled = styled('div')`
  ${({ theme }) => `
    height: auto;
    width: 100%;
    button {
      margin: ${theme.spacing()};
    }
  `}
`
