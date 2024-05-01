import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { StorybookFormProvider } from '@/mocks/reactHookForm'
import InputImage from './InputImage'

const meta: Meta<typeof InputImage> = {
  title: 'Input/Image',
  args: {
    label: 'name',
    name: 'name',
    type: 'text'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider>
        <Story />
      </StorybookFormProvider>
    )
  ],
  component: InputImage
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(await canvas.findByRole('textbox')).toBeDefined()
  }
}
