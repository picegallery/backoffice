import { WidgetStyled, WidgetContent, WidgetText } from './Widget.styled'
import MessageIcon from '@mui/icons-material/Message'

interface WidgetProps {
colors?: { primary: string };
  percentFillValue?: number;
    title: string;
    value: number;
    text: string;
  };

const Widget: React.FC<WidgetProps> = ({ colors, percentFillValue, title, value, text }) => {
  return (
    <WidgetStyled colors={{ primary: '#ffffff' }} percentFillValue={50} >
      <WidgetContent>
      <MessageIcon component="span" fontSize="large" />
        <WidgetText variant="h4">{200}</WidgetText>
        <WidgetText variant="body1">Messages</WidgetText>
        <WidgetText variant="body2">3.46% Since last month</WidgetText>
      </WidgetContent>
    </WidgetStyled>
  );
};

export default Widget
export type { WidgetProps }