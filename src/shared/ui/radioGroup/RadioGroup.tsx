import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'
import { RadioGroup } from 'radix-ui'

import s from './radioGroup.module.scss'

// import {Typography} from '@/components/ui/typography'

/**
 * Represents a single option in the radio group.
 */
export interface Option {
  /** The text displayed next to the radio button. */
  label: string
  /** The value associated with this option. */
  value: string
}

/**
 * Props for the `CustomRadioGroup` component.
 */
export type RadioGroupProps = {
  /** Array of options to display in the radio group. */
  options: Option[]
  /** Currently selected value in the radio group. */
  value?: string
  /**The name used when using this component inside a form*/
  name?: string
  /** Callback triggered when the selected value changes. */
  onValueChange?: (value: string) => void
  /** Whether the entire radio group is disabled. */
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const CustomRadioGroup: FC<RadioGroupProps> = ({ options, ...rest }) => {
  const labelClasses = clsx(s.item, rest.disabled && s.disabled)

  return (
    <RadioGroup.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {options.map(el => (
        // <Typography as={'label'} variant={'????'} key={el.value} className={labelClasses}>
        <label key={el.value} className={labelClasses}>
          <RadioGroup.Item value={el.value} className={s.radio}>
            <div className={s.frame}></div>
            <RadioGroup.Indicator className={s.indicator} />
          </RadioGroup.Item>
          {el.label}

          {/*</Typography>   */}
        </label>
      ))}
    </RadioGroup.Root>
  )
}
