import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import { WidgetStyled, WidgetContent, WidgetIconContainerStyled, WidgetContentTextStyled, WidgetText } from './Widget.styled';
import { IconPosition } from './Widget.styled'
import { WidgetProps } from './Widget.styled'

const Widget: React.FC<WidgetProps> = ({ colors, percentFillValue, title, value, text, icon, iconPosition }) => {
  return (
    <WidgetStyled colors={{ primary: '#ffffff' }} percentFillValue={50} >
      <WidgetContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <WidgetIconContainerStyled iconPosition={iconPosition ?? IconPosition.LEFT}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'DodgerBlue' }}>
              <Icon sx={{ fontSize: 50, color: 'white' }}>{icon}</Icon>
            </Avatar>
          </WidgetIconContainerStyled>
          <WidgetContentTextStyled>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <WidgetText variant="h4">{value}</WidgetText>
              <WidgetText variant="body1">{title}</WidgetText>
              <WidgetText variant="body2">{text}</WidgetText>
            </div>
          </WidgetContentTextStyled>
          {iconPosition === IconPosition.RIGHT && (
            <WidgetIconContainerStyled iconPosition={iconPosition}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: 'DodgerBlue' }}>
                <Icon sx={{ fontSize: 50, color: 'white' }}>{icon}</Icon>
              </Avatar>
            </WidgetIconContainerStyled>
          )}
        </div>
      </WidgetContent>
    </WidgetStyled>
  );
};

export default Widget
export type { WidgetProps }