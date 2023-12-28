'use client'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FooterStyled = styled(Box)`
  ${({ theme }) => `
    margin-top: auto;
    background-color: ${theme.palette.primary.main};
    text-align: center;
    color: ${theme.palette.getContrastText(theme.palette.primary.main)};
    padding: ${theme.spacing()};
  `}
`
