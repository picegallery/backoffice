import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('footer-component')).toBeDefined()
  }
}
