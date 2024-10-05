import { StoryObj } from '@storybook/react'
import { Meta, StoryContext } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Loader from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Loader Content</>
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = () => (
  <Loader />
);

Default.play = async ({ canvasElement }: StoryContext<React.ReactElement>) => {
  const canvas = within(canvasElement as HTMLElement);
  expect(canvas.getByTestId('card-component')).toBeDefined();
};