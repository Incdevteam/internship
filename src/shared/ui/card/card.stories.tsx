import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardExample: Story = {
  args: {
    children: 'Lorem ipsum dolor',
    style: {
      height: '100px',
      width: '100px',
      padding: '20px',
    },
    className: '',
  },
}
