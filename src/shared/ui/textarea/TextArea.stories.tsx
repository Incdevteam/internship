import * as Storybook from '@storybook/react'

import { TextArea } from 'shared/ui/textarea/TextArea'

const meta: Storybook.Meta<typeof TextArea> = {
  title: 'Shared/UI/TextArea',
  component: TextArea,
  tags: ['autodocs'],
}

export default meta

type Story = Storybook.StoryObj<typeof TextArea>

export const Controlled: Story = {
  args: {
    label: 'TextArea',
    placeholder: 'Enter text',
  },
}

export const WithError: Story = {
  args: {
    label: 'TextArea',
    placeholder: 'TextArea',
    errorMessage: 'Error text',
  },
}

export const Disabled: Story = {
  args: {
    label: 'TextArea',
    placeholder: 'TextArea',
    disabled: true,
  },
}
