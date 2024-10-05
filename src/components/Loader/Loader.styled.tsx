'use client'
import { styled } from '@mui/material/styles'

export const LoaderStyled = styled('div')(() => ({
  height: 'auto',
  width: '100%',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  background: "rgb(0 0 0 / 80%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));
