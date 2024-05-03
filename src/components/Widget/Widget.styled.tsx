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
  justifyContent: 'space-around',
  padding: theme.spacing(2),
  width: '200px',
  height: '150px',
  top: '40px',
  lineHeight: '20px',
  borderRadius: '20px',
  gap: '24px',
}));

export const WidgetContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const WidgetText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}))