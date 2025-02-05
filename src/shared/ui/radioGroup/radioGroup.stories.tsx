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

export const Default: Story = {
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
  },
}

export const Controlled: Story = {
  args: {
    options: baseData,
    defaultValue: '2',
    disabled: false, // Убедитесь, что кнопки не отключены
  },
}

export const Disabled: Story = {
  args: {
    options: baseData,
    value: '1',
    disabled: true,
  },
}
