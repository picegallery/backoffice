import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { StorybookFormProvider } from '@/mocks/reactHookForm'
import InputDate from './InputDate'

const meta: Meta<typeof InputDate> = {
  title: 'Input/date',
  args: {
    label: 'name',
    name: 'name',
    type: 'date'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider>
        <Story />
      </StorybookFormProvider>
    )
  ],
  component: InputDate
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(await canvas.findByRole('textbox')).toBeDefined()
  }
}
