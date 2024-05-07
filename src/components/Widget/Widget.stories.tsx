import { Meta, StoryFn } from '@storybook/react'
import Widget from './Widget'
import MessageIcon from '@mui/icons-material/Message'
import WorkIcon from '@mui/icons-material/Work'
import { IconPosition } from './Widget.styled'

type WidgetArgs = {
  colors?: { primary: string };
  percentFillValue?: number;
  title: string;
  value: number;
  text: string;
  icon?: JSX.Element;
  iconPosition?: IconPosition;
}

const meta: Meta = {
  title: 'Widget',
  component: Widget,
  argTypes: {
    colors: { control: 'color' }, 
    percentFillValue: { control: 'number' }, 
    title: { control: 'text' }, 
    value: { control: 'number' }, 
    text: { control: 'text' }, // Corrigido para aceitar uma string
    iconPosition: { control: { type: 'inline-radio', options: [IconPosition.LEFT, IconPosition.RIGHT] } },
  },
};

export default meta;

const Template: StoryFn<WidgetArgs> = (args) => <Widget {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Messages',
  value: 200,
  text: '3.46% Since last month',
  icon: <MessageIcon fontSize="large" />,
  iconPosition: IconPosition.LEFT,
};

export const CurrentJobs = Template.bind({});
CurrentJobs.args = {
  title: 'Current Jobs',
  value: 160,
  text: '-2,87% since last week',
  icon: <WorkIcon fontSize="large" />,
  iconPosition: IconPosition.LEFT,
};

export const WidgetTemplate = Template.bind({});
WidgetTemplate.args = {
  title: 'Template Title',
  value: 100, 
  text: 'Some text here',
  icon: <MessageIcon fontSize="large" />,
  iconPosition: IconPosition.LEFT,
}