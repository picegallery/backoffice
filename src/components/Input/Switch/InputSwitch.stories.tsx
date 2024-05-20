import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { StorybookFormProvider } from '@/mocks/reactHookForm';
import InputSwitch from './InputSwitch';

const meta: Meta<typeof InputSwitch> = {
  title: 'Input/Switch',
  args: {
    label: 'Switch',
    name: 'switch'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider>
        <Story />
      </StorybookFormProvider>
    )
  ],
  component: InputSwitch
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(await canvas.findByRole('checkbox')).toBeDefined();
  }
}