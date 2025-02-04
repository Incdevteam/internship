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

// История для дефолтной выбранной радиокнопки
export const DefaultSelectedRadioButton: Story = {
  render: args => {
    const [value, setValue] = useState('1') // Первая радиокнопка выбрана по умолчанию

    return (
      <>
        <CustomRadioGroup {...args} value={value} onValueChange={setValue} defaultValue={'1'} />
        <div style={{ marginTop: '10px' }}>Selected value: {value}</div>
      </>
    )
  },
  args: {
    options: baseData,
    disabled: false, // Убедитесь, что кнопки не отключены
    defaultValue: '1', // Явно указываем, что первая кнопка выбрана по умолчанию
  },
}

export const DisabledGroupRadioButton: Story = {
  args: {
    options: baseData,
    value: '1',
    disabled: true,
  },
}
