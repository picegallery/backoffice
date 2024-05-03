import { Meta, StoryFn } from '@storybook/react'
import Widget, { WidgetProps } from './Widget'
import MessageIcon from '@mui/icons-material/Message'

type WidgetArgs = WidgetProps & { icon?: JSX.Element };

const meta: Meta = {
  title: 'Widget',
  component: Widget,
  argTypes: {
    colors: { control: 'color' }, 
    percentFillValue: { control: 'number' }, 
    title: { control: 'text' }, 
    value: { control: 'number' }, 
    text: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<WidgetArgs> = (args) => <Widget {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Widget Title',
  text: 'Some text here',
  icon: <MessageIcon fontSize="large" />
}