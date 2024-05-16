import { StoryObj } from '@storybook/react'
import { Meta, StoryContext } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = () => <Logo />

Default.play = async ({ canvasElement }: StoryContext<React.ReactElement>) => {
  const canvas = within(canvasElement as HTMLElement)
  expect(canvas.getByTestId('logo-component')).toBeDefined()
}
