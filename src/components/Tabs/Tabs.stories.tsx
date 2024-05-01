import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Tabs from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  argTypes: {
    items: { control: 'select', name: 'Items', options: [{ label: 'tab 1', content: <>content</> }] }
  },
  component: Tabs
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('tabs-component')).toBeDefined()
  }
}
