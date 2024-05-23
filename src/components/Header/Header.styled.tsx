'use client'
import { Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeaderStyled = styled(Toolbar)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main}
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TitleStyled = styled('span')(() => ({}))
