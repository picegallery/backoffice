import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { StorybookFormProvider } from '@/mocks/reactHookForm'
import InputSelect from './InputSelect'

const meta: Meta<typeof InputSelect> = {
  title: 'Input/Select',
  args: {
    label: 'name',
    name: 'name'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider>
        <Story />
      </StorybookFormProvider>
    )
  ],
  component: InputSelect
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(await canvas.findByRole('textbox')).toBeDefined()
  }
}
