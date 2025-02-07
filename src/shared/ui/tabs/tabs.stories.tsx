import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, TabsSwitcher } from './Tabs'

const meta = {
  title: 'Components/ TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TabsSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryDefault: Story = {
  args: {
    variant: 'primary',
    fullWidth: false,
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
}

export const PrimaryFullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
}

export const PrimaryWithSelectedTab: Story = {
  args: {
    variant: 'primary',
    fullWidth: false,
    defaultValue: 'tab1',
    tabs: [{ value: 'tab1', title: 'Tab 1' }],
  },
}

export const PrimaryWithContent: Story = {
  args: {
    variant: 'primary',
    fullWidth: false,
    defaultValue: 'tab1',
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
    tabs: [{ value: 'tab1', title: 'Tab 1', disabled: true }],
  },
}

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
    tabs: [
      { value: 'tab1', title: 'Tab 1' },
      { value: 'tab2', title: 'Tab 2' },
    ],
  },
}

export const SecondaryFullWidth: Story = {
  args: {
    variant: 'secondary',
    fullWidth: true,
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
    defaultValue: 'tab1',
    tabs: [{ value: 'tab1', title: 'Tab 1' }],
  },
}

export const SecondaryWithContent: Story = {
  args: {
    variant: 'secondary',
    fullWidth: false,
    defaultValue: 'tab1',
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
    tabs: [{ value: 'tab1', title: 'Tab 1', disabled: true }],
  },
}
