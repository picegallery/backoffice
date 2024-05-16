'use client'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import Link from 'next/link'

export const SignInPageStyled = styled(Grid)`
  height: 100vh;
`

export const FormContainerStyled = styled(Grid)`
  background-color: ${grey[50]};
`
export const BackgroundImageStyled = styled(Grid)`
  background-size: cover;
  background-image: url(/assets/signin.png);
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.15px;
  color: ${grey[800]};
  text-align: center;
`
