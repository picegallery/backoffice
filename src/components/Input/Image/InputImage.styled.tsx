'use client'
import { FormControl } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ImageContainerStyled = styled('div')`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
  img {
    border-radius: 50%;
  }
`
export const InputImageContainerStyled = styled(FormControl)`
  display: flex;
  align-items: center;
`
