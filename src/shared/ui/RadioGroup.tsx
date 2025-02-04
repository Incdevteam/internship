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
  /** Callback triggered when the selected value changes. */
  onValueChange?: (value: string) => void
  /** Whether the entire radio group is disabled. */
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

/**
 * A customizable radio group component built on top of Radix UI's `RadioGroup`.
 *
 * @remarks
 * This component allows users to select a single option from a list of radio buttons.
 * It supports customization of styles, disabled states, and dynamic value changes.
 *
 * @example
 * ```tsx
 * const options = [
 *   { label: 'Option 1', value: '1' },
 *   { label: 'Option 2', value: '2' },
 * ];
 *
 * <CustomRadioGroup
 *   options={options}
 *   value="1"
 *   onValueChange={(value) => console.log(value)}
 *   disabled={false}
 * />
 * ```
 */

export const CustomRadioGroup: FC<RadioGroupProps> = ({ options, ...rest }) => {
  const labelClasses = clsx(s.item, rest.disabled && s.disabled)

  return (
    // Root container for the radio group
    <RadioGroup.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {/* Map through the options to render each radio button */}
      {options.map(el => (
        // <Typography as={'label'} variant={'????'} key={el.value} className={labelClasses}>
        <label key={el.value} className={labelClasses}>
          {/* Individual radio button item */}
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
