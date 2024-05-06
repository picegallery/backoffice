import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

interface WidgetStyledProps {
  colors: {
    primary: string;
};
percentFillValue: number,
};

export const WidgetStyled = styled(Paper)<WidgetStyledProps>(({ theme, colors, percentFillValue }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  width: '200px',
  height: '150px',
  margin: '0 30px',
  top: '40px',
  lineHeight: '20px',
  borderRadius: '20px',
  gap: '24px',
  backgroundColor: theme.palette.primary.main,
}));

export const WidgetContent = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.common.white,
  textAlign: 'center',
  alignItems: 'center',
}));

export const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}));

export const WidgetText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}))