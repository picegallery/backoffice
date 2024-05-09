import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export type WidgetStyledProps = {
  colors: {
    primary: string;
  };
  percentFillValue: number;
}

export type WidgetProps = {
  colors?: { primary: string };
  percentFillValue?: number;
  title: string;
  value: number;
  text: string;
  icon?: JSX.Element;
  iconPosition?: IconPosition;
}

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
  alignItems: 'flex-center',
}));


export const WidgetIconContainerStyled = styled('div')<{ iconPosition: IconPosition }>(({ theme, iconPosition }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: iconPosition === IconPosition.LEFT ? 'flex-start' : 'flex-end',
  marginRight: theme.spacing(1),
}));

export const WidgetContentTextStyled = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));

export const WidgetText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const WidgetAvatarStyled = styled(Avatar)<{ iconColor: string }>`
  width: 80px;
  height: 80px;
  background-color: ${({ iconColor }) => iconColor};
  `;