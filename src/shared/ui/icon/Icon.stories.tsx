import * as Storybook from '@storybook/react'
import { useState } from 'react'

import './Icon.stories.scss'

import { Icon } from './Icon'
import { Icons } from './model/constants'
import { IconName } from './model/types'

const meta: Storybook.Meta<typeof Icon> = {
  title: 'Shared/UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.values(Icons)
        .flat()
        .map(iconArray => iconArray[0]),
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: 'home' },
      },
    },
    theme: {
      control: { type: 'radio' },
      options: ['solid', 'outline'],
      table: {
        type: { summary: `'solid' | 'outline'` },
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      control: { type: 'color' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'currentColor' },
      },
    },
    className: {
      control: false,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
  },
}

export default meta

type Story = Storybook.StoryObj<typeof Icon>

// Playground story for Icon component
export const Playground: Story = {
  render: args => (
    <Icon
      {...args}
      style={{
        width: args.style?.width || 24,
        height: args.style?.height || 24,
        color: args.color,
      }}
    />
  ),
  args: {
    name: 'home',
    style: { width: 36, height: 36 },
    color: '#4b0dbe',
    theme: 'solid',
  },
}

// IconGroup component for rendering multiple icons in a group
const IconGroup = ({
  icons,
  theme,
}: {
  icons: ReadonlyArray<readonly [string, ...string[]]>
  theme: 'light' | 'dark'
}) => (
  <div className={'icons-row'}>
    {icons.map(([baseIcon, outlineIcon]) => {
      const iconName = theme === 'dark' ? outlineIcon : baseIcon

      return (
        <div>
          <div key={iconName} className={'icon-item'}>
            <Icon
              name={iconName as IconName}
              theme={'solid'}
              style={{ width: '40px', height: '40px' }}
            />
            <span>{iconName}</span>
          </div>
          <div key={iconName} className={'icon-item'}>
            <Icon
              name={outlineIcon as IconName}
              theme={'outline'}
              style={{ width: '40px', height: '40px' }}
            />
            <span>{outlineIcon}</span>
          </div>
        </div>
      )
    })}
  </div>
)

// AllIcons story for displaying all available icons categorized
export const AllIcons = () => (
  <div className={'icons-grid'}>
    {Object.entries(Icons).map(([category, icons]) => (
      <div key={category} className={'category-block'}>
        <h2>{category}</h2>
        <IconGroup icons={icons} theme={'light'} />
      </div>
    ))}
  </div>
)

// Sizes story for displaying icons in different sizes
export const Sizes = () => (
  <div className={'icons-row'}>
    {[16, 24, 32, 48, 64].map(size => (
      <div key={size} className={'icon-item'}>
        <Icon name={'settings'} style={{ width: size, height: size }} />
        <span>{size}px</span>
      </div>
    ))}
  </div>
)

// Colors story for displaying icons with different colors
export const Colors = () => (
  <div className={'icons-row'}>
    {['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'].map((color, index) => (
      <div key={`${color}-${index}`} className={'icon-item'}>
        <Icon name={'home'} color={color} style={{ width: '40px', height: '40px' }} />
        <span>{color}</span>
      </div>
    ))}
  </div>
)

// ThemeSwitcher story for toggling between light and dark theme
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'solid' | 'outline'>('solid')

  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'outline' ? 'solid' : 'outline')}
        style={{ marginBottom: 20 }}
        type={'button'}
      >
        Current theme is <b>{theme}</b>
      </button>
      <div className={'icons-grid'}>
        {(['home', 'settings', 'mic', 'trash', 'calendar', 'person'] as IconName[]).map(
          (name, index) => (
            <div key={`${name}-${index}`} className={'icon-item'}>
              <Icon name={name} theme={theme} style={{ width: '40px', height: '40px' }} />
              <span>{name}</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
