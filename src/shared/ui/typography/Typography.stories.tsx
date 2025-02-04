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
    variant: 'regular-large',
    children: 'Customizable Typography Component',
    as: 'p',
    style: { color: 'green' },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'large',
        'heading',
        'subheading',
        'section-heading',
        'regular-large',
        'bold-large',
        'regular-small',
        'medium-small',
        'bold-small',
        'small',
        'semi-bold-small',
        'link-regular',
        'link-small',
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
    { variant: 'heading', text: 'Heading Text', fontSize: '20px', as: 'h1' },
    { variant: 'subheading', text: 'Subheading Text', fontSize: '18px', as: 'h2' },
    { variant: 'section-heading', text: 'Section Heading Text', fontSize: '16px', as: 'h3' },
    { variant: 'regular-large', text: 'Regular Large Text', fontSize: '16px', as: 'p' },
    { variant: 'bold-large', text: 'Bold Large Text', fontSize: '16px', as: 'p' },
    { variant: 'regular-small', text: 'Regular Small Text', fontSize: '14px', as: 'p' },
    { variant: 'medium-small', text: 'Medium Small Text', fontSize: '14px', as: 'p' },
    { variant: 'bold-small', text: 'Bold Small Text', fontSize: '14px', as: 'p' },
    { variant: 'small', text: 'Small Text', fontSize: '12px', as: 'p' },
    { variant: 'semi-bold-small', text: 'Semi-Bold Small Text', fontSize: '12px', as: 'p' },
    { variant: 'link-regular', text: 'Regular Link', fontSize: '14px', as: 'a', href: '#' },
    { variant: 'link-small', text: 'Small Link', fontSize: '12px', as: 'a', href: '#' },
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
            {text}
          </Typography>
          <Typography variant={'small'} style={{ color: '#8a8d8c', marginTop: '0.5rem' }}>
            {variant} : {fontSize} as <code>{as}</code>
          </Typography>
        </div>
      ))}
    </div>
  )
}
