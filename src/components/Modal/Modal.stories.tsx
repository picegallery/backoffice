import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Modal Content</>
  },
  component: Modal
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('modal-component')).toBeDefined()
  }
}
