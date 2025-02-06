import * as Storybook from '@storybook/react'

import { Typography } from './Typography'

const meta: Storybook.Meta<typeof Typography> = {
  title: 'Shared/UI/Typography',
  tags: ['autodocs'],
  component: Typography,
}

export default meta

type Story = Storybook.StoryObj<typeof Typography>

export const CustomizableTypography: Story = {
  args: {
    variant: 'regular-text-16',
    children: 'Customizable Typography Component',
    as: 'p',
    style: { color: 'green' },
  },
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
    as: {
      control: 'text',
    },
    style: {
      control: 'object',
    },
  },
}

export const AllVariants: Storybook.StoryFn<typeof Typography> = () => {
  const variants = [
    { variant: 'large', text: 'Large Text', fontSize: '26px', as: 'p' },
    { variant: 'h1', text: 'Heading 1 Text', fontSize: '32px', as: 'h1' },
    { variant: 'h2', text: 'Heading 2 Text', fontSize: '24px', as: 'h2' },
    { variant: 'h3', text: 'Heading 3 Text', fontSize: '20px', as: 'h3' },
    { variant: 'regular-text-16', text: 'Regular Text 16', fontSize: '16px', as: 'p' },
    { variant: 'bold-text-16', text: 'Bold Text 16', fontSize: '16px', as: 'p' },
    { variant: 'regular-text-14', text: 'Regular Text 14', fontSize: '14px', as: 'p' },
    { variant: 'medium-text-14', text: 'Medium Text 14', fontSize: '14px', as: 'p' },
    { variant: 'bold-text-14', text: 'Bold Text 14', fontSize: '14px', as: 'p' },
    { variant: 'small-text', text: 'Small Text', fontSize: '12px', as: 'p' },
    { variant: 'semi-bold-small-text', text: 'Semi-Bold Small Text', fontSize: '12px', as: 'p' },
    { variant: 'regular-link', text: 'Regular Link', fontSize: '14px', as: 'a', href: '#' },
    { variant: 'small-link', text: 'Small Link', fontSize: '12px', as: 'a', href: '#' },
  ]

  return (
    <div>
      {variants.map(({ variant, as = 'p', text, fontSize, ...props }) => (
        <div
          key={variant}
          style={{
            marginBottom: '2rem',
            borderBottom: '1px solid #afadad',
            paddingBottom: '1rem',
          }}
        >
          <Typography
            variant={variant as any}
            as={as as any}
            {...props}
            style={{ display: 'block' }}
          >
            {text} ({fontSize} as <code>{as}</code>)
          </Typography>
          <Typography variant={'small-text'} style={{ color: '#717372', marginTop: '0.5rem' }}>
            variant: {variant}
          </Typography>
        </div>
      ))}
    </div>
  )
}
