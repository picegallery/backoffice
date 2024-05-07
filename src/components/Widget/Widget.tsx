import { WidgetStyled, WidgetContent, WidgetIconContainerStyled, WidgetContentTextStyled, WidgetText } from './Widget.styled'

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}
interface WidgetProps {
colors?: { primary: string };
  percentFillValue?: number;
    title: string;
    value: number;
    text: string;
    icon?: JSX.Element;
    iconPosition?: IconPosition;
  }

  const Widget: React.FC<WidgetProps> = ({ colors, percentFillValue, title, value, text, icon, iconPosition = IconPosition.LEFT }) => {
    return (
      <WidgetStyled colors={{ primary: '#ffffff' }} percentFillValue={50} >
        <WidgetContent>
        <WidgetIconContainerStyled iconPosition={iconPosition}> 
            {icon}
          </WidgetIconContainerStyled>
          <WidgetContentTextStyled>
          <div>
              <WidgetText variant="h4">{value}</WidgetText> 
            </div>
            <div>
              <WidgetText variant="body1">{title}</WidgetText> 
              <WidgetText variant="body2">{text}</WidgetText>
            </div>
          </WidgetContentTextStyled>
        </WidgetContent>
      </WidgetStyled>
    );
  };
  
  export default Widget
  export type { WidgetProps }