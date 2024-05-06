import { WidgetStyled, WidgetContent, IconContainer, WidgetText } from './Widget.styled'
import MessageIcon from '@mui/icons-material/Message'
import WorkIcon from '@mui/icons-material/Work'

interface WidgetProps {
colors?: { primary: string };
  percentFillValue?: number;
    title: string;
    value: number;
    text: string;
    icon?: JSX.Element;
  };

const Widget: React.FC<WidgetProps> = ({ colors, percentFillValue, title, value, text }) => {
  return (
    <WidgetStyled colors={{ primary: '#ffffff' }} percentFillValue={50} >
      <WidgetContent>
      <IconContainer>
          {title === 'Messages' && <MessageIcon fontSize="large" sx={{ color: '#fff' }} />}
          {title === 'Current Jobs' && <WorkIcon fontSize="large" sx={{ color: '#fff' }} />}
        </IconContainer>
        <div style={{ textAlign: 'center' }}> 
        <div>
            <WidgetText variant="h4">{value}</WidgetText> 
          </div>
          <div>
            <WidgetText variant="body1">{title}</WidgetText> 
            <WidgetText variant="body2">{text}</WidgetText>
          </div>
        </div>
      </WidgetContent>
    </WidgetStyled>
  );
};

export default Widget
export type { WidgetProps }