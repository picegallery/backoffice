import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import TableActions from './TableActions'

const meta: Meta<typeof TableActions> = {
  title: 'TableActions',
  argTypes: {},
  args: {},
  component: TableActions
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByTestId('table-actions-component')).toBeDefined()
  }
}
