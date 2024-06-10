import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Button } from './Button'

const meta: Meta<typeof ButtonStyled> = {
  title: 'Button',
  component: ButtonStyled,
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: 'Button Content'
  }
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
