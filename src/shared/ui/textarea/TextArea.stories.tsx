import * as Storybook from '@storybook/react'

import { TextArea } from 'shared/ui/textarea/TextArea'

const meta: Storybook.Meta<typeof TextArea> = {
  title: 'Shared/UI/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export default meta

type Story = Storybook.StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    label: 'TextArea',
    placeholder: 'Enter text',
  },
}

export const WithError: Story = {
  args: {
    label: 'TextArea',
    placeholder: 'Enter text',
    errorMessage: 'Error message',
  },
}

export const Disabled: Story = {
  args: {
    label: 'TextArea',
    placeholder: 'TextArea',
    disabled: true,
  },
}
