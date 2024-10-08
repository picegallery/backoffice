import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import { styled } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
)

export const InputTextareaStyled = styled('div')`
  position: relative;
  width: 100%;
  display: flex;
`
