import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { CustomRadioGroup, Option } from './RadioGroup'

const meta = {
  title: 'Components/Radio Group',
  component: CustomRadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomRadioGroup>

const baseData: Option[] = [
  { label: 'First', value: '1' },
  { label: 'Second', value: '2' },
]

export default meta

type Story = StoryObj<typeof meta>

// История для дефолтного отображения радиокнопок без подсветки
export const DefaultRadioButton: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined) // Ничего не выбрано

    return (
      <>
        <CustomRadioGroup {...args} value={value} onValueChange={setValue} />
        <div style={{ marginTop: '10px' }}>Selected value: {value}</div>
      </>
    )
  },
  args: {
    options: baseData,
    disabled: false, // Убедитесь, что кнопки не отключены
  },
}

export const SelectedRadioButton: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <CustomRadioGroup {...args} value={value} onValueChange={setValue} />
        <div style={{ marginTop: '10px' }}>Selected value: {value}</div>
      </>
    )
  },

  args: {
    options: baseData,
  },
}

export const DisabledGroupRadioButton: Story = {
  args: {
    options: baseData,
    value: '1',
    disabled: true,
  },
}
