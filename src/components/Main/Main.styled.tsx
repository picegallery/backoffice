'use client'
import { styled } from '@mui/material/styles'
import { BaseCSSProperties } from '@mui/material/styles/createMixins'

export const MainStyled = styled('div')(({ theme }) => ({
  height: 'auto',
  padding: theme.spacing(),
  flexGrow: 1
}))

export const SpacingToolbarStyled = styled('div')(({ theme }) => ({
  ...(theme.mixins.toolbar as BaseCSSProperties),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 1)
}))
