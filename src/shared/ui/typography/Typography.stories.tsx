import * as Storybook from '@storybook/react'

import { Typography } from './Typography'

const meta: Storybook.Meta<typeof Typography> = {
  title: 'Shared/UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'regular-text-16',
        'bold-text-16',
        'regular-text-14',
        'medium-text-14',
        'bold-text-14',
        'small-text',
        'semi-bold-small-text',
        'regular-link',
        'small-link',
      ],
    },
    color: {
      control: 'color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta

type Story = Storybook.StoryObj<typeof Typography>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large Text',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
}

export const RegularText16: Story = {
  args: {
    variant: 'regular-text-16',
    children: 'Regular Text 16px',
  },
}

export const BoldText16: Story = {
  args: {
    variant: 'bold-text-16',
    children: 'Bold Text 16px',
  },
}

export const RegularText14: Story = {
  args: {
    variant: 'regular-text-14',
    children: 'Regular Text 14px',
  },
}

export const MediumText14: Story = {
  args: {
    variant: 'medium-text-14',
    children: 'Medium Text 14px',
  },
}

export const BoldText14: Story = {
  args: {
    variant: 'bold-text-14',
    children: 'Bold Text 14px',
  },
}

export const SmallText: Story = {
  args: {
    variant: 'small-text',
    children: 'Small Text',
  },
}

export const SemiBoldSmallText: Story = {
  args: {
    variant: 'semi-bold-small-text',
    children: 'Semi-Bold Small Text',
  },
}

export const RegularLink: Story = {
  args: {
    variant: 'regular-link',
    children: 'Regular Link',
  },
}

export const SmallLink: Story = {
  args: {
    variant: 'small-link',
    children: 'Small Link',
  },
}
