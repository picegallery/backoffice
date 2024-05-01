import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Icon from './Icon'

const iconList = [
  'inbox',
  'chevronRight',
  'chevronLeft',
  'expandMore',
  'expandLess',
  'dashboard',
  'person',
  'add',
  'list',
  'cropOriginal',
  'remove',
  'edit',
  'delete'
]

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    iconName: { type: 'string' }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const AllIcons: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    {
      iconList.map(async (icon) => expect(await canvas.findByTestId(`icon-component-${icon}`)).toBeDefined())
    }
  },
  render: () => <IconsRender />
}

const IconsRender = () => {
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'inline-flex',
        maxWidth: 500,
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}
    >
      {iconList.map((icon) => (
        <li
          key={icon}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 8,
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          {icon}
          <Icon iconName={icon} />
        </li>
      ))}
    </ul>
  )
}
