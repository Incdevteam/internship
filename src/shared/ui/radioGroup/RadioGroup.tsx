import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'
import { RadioGroup } from 'radix-ui'

import s from './radioGroup.module.scss'

import { Typography } from '../typography'

export interface Option {
  label: string
  value: string
}

export type RadioGroupProps = {
  options: Option[]
  value?: string
  name?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const CustomRadioGroup = (props: RadioGroupProps) => {
  const { options, disabled, ...rest } = props

  const labelClasses = clsx(s.item, disabled && s.disabled)

  return (
    <RadioGroup.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {options.map(option => (
        <Typography
          as={'label'}
          variant={'regular-text-14'}
          key={option.value}
          className={labelClasses}
        >
          <RadioGroup.Item value={option.value} className={s.radio}>
            <div className={s.frame}></div>
            <RadioGroup.Indicator className={s.indicator} />
          </RadioGroup.Item>
          {option.label}
        </Typography>
      ))}
    </RadioGroup.Root>
  )
}
