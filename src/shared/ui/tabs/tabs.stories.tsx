import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, TabsSwitcher } from './Tabs'

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

export const PrimaryDefault: Story = {
  args: {
    variant: 'primary',
    fullWidth: false, // fullWidth отключен по умолчанию
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
}

export const PrimaryFullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true, // fullWidth включен
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
}

// История для варианта "primary" с выбранной вкладкой по умолчанию
export const PrimaryWithSelectedTab: Story = {
  args: {
    variant: 'primary',
    fullWidth: false,
    defaultValue: 'tab1', // Вкладка "Tab 1" выбрана по умолчанию
    tabs: [{ value: 'tab1', title: 'Tab 1' }],
  },
}

// История для отображения контента при выборе вкладки
export const PrimaryWithContent: Story = {
  args: {
    variant: 'primary',
    fullWidth: false,
    defaultValue: 'tab1', // Вкладка "Tab 1" выбрана по умолчанию
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
  render: args => (
    <TabsSwitcher {...args}>
      <TabContent value={'tab1'}>
        <p>
          Содержимое для выбранной вкладки 1: Fish are aquatic animals that breathe through gills
          and have fins. There are many species of fish, including freshwater and saltwater
          varieties, such as cod, salmon, and carp.
        </p>
      </TabContent>
      <TabContent value={'tab2'}>
        <p>
          Содержимое для выбранной вкладки 2: Some fish, like sharks, are predators and play an
          important role in the ecosystem. Fish are also a vital source of food for humans and many
          animals.
        </p>
      </TabContent>
    </TabsSwitcher>
  ),
}

export const PrimaryWithDisabledTab: Story = {
  args: {
    variant: 'primary',
    fullWidth: false,
    defaultValue: 'tab1',
    tabs: [
      { value: 'tab1', title: 'Tab 1', disabled: true }, // Вкладка "Tab 1" отключена
    ],
  },
}

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false, // По умолчанию fullWidth отключен
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
}

export const SecondaryFullWidth: Story = {
  args: {
    variant: 'secondary',
    fullWidth: true, // По умолчанию fullWidth включен
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
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

export const SecondaryWithContent: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
    defaultValue: 'tab1', // Вкладка "Tab 1" выбрана по умолчанию
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
  render: args => (
    <TabsSwitcher {...args}>
      <TabContent value={'tab1'}>
        <p>
          Содержимое для выбранной вкладки 1: Fish are aquatic animals that breathe through gills
          and have fins. There are many species of fish, including freshwater and saltwater
          varieties, such as cod, salmon, and carp.
        </p>
      </TabContent>
      <TabContent value={'tab2'}>
        <p>
          Содержимое для выбранной вкладки 2: Some fish, like sharks, are predators and play an
          important role in the ecosystem. Fish are also a vital source of food for humans and many
          animals.
        </p>
      </TabContent>
    </TabsSwitcher>
  ),
}

export const SecondaryWithDisabledTab: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
    defaultValue: 'tab1',
    tabs: [
      { value: 'tab1', title: 'Tab 1', disabled: true }, // Вкладка "Tab 1" отключена
    ],
  },
}
