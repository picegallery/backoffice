import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Main from './Main'

const meta: Meta<typeof Main> = {
  title: 'Main',
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Main Content</>
  },
  component: Main
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('main-component')).toBeDefined()
  }
}
