import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Button, { ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Button Content</>
  },
  component: Button
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('button-component')).toBeDefined()
    expect(canvas.getByRole('button')).toBeDefined()
  }
}
