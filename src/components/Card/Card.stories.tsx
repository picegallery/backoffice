import { StoryObj } from '@storybook/react'
import { Meta, StoryContext } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Card Content</>
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = () => (
  <Card />
);

Default.play = async ({ canvasElement }: StoryContext<React.ReactElement>) => {
  const canvas = within(canvasElement as HTMLElement);
  expect(canvas.getByTestId('card-component')).toBeDefined();
};