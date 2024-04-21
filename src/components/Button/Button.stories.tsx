import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Button, { ButtonProps } from './Button'
import { StyledButton } from './Button.styled'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
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

const styledMeta: Meta<typeof StyledButton> = {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    children: { type: 'string' },
  },
  args: {
    children: 'Styled Button',
  },
}