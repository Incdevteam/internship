import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from './Tabs'

const meta = {
  title: 'Components/ TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select', // Позволяет выбирать вариант в Storybook UI
      options: ['primary', 'secondary'],
    },
    fullWidth: {
      control: 'boolean', // Позволяет включать/выключать fullWidth
    },
  },
} satisfies Meta<typeof TabsSwitcher>

export default meta

type Story = StoryObj<typeof meta>

// История для варианта "primary"
// export const Primary: Story = {
//     args: {
//         variant: 'primary', // Указываем вариант
//         fullWidth: false, // По умолчанию fullWidth отключен
//         tabs: [
//             {value: 'tab1', title: 'Tab 1'},
//             {value: 'tab2', title: 'Tab 2'},
//             {value: 'tab3', title: 'Tab 3', disabled: true}, // Отключенная вкладка
//         ],
//     },
// };

// История для варианта "secondary"
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    fullWidth: true, // По умолчанию fullWidth отключен
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
      { value: 'tab3', title: 'Tab 3', disabled: true }, // Отключенная вкладка
    ],
  },
}

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false, // По умолчанию fullWidth отключен
    tabs: [{ value: 'tab1', title: 'Tab 1' }],
  },
}

export const SecondaryWithSelectedTab: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
    defaultValue: 'tab1', // Указываем, что вкладка "Tab 1" выбрана по умолчанию
    tabs: [{ value: 'tab1', title: 'Tab 1' }],
  },
}

export const SecondaryWithDisabledTab: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
    defaultValue: 'tab1',
    tabs: [{ value: 'tab1', title: 'Tab 1', disabled: true }],
  },
}
