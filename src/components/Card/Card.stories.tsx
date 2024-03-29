import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Card',
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Card Content</>
  },
  component: Card
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('card-component')).toBeDefined()
  }
}
