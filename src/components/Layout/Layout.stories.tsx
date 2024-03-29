import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Layout from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: <>Layout Content</>
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  component: Layout
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('layout-component')).toBeDefined()
  }
}
