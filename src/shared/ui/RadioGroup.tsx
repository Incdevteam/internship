import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'
import { RadioGroup } from 'radix-ui'

import s from './radioGroup.module.scss'

// import {Typography} from '@/components/ui/typography'

export interface Option {
  label: string //текст, который отображается рядом с радиокнопкой
  value: string //значение, которое будет передано при выборе этой опции
}

export type RadioGroupProps = {
  options: Option[] // массив опций для отображения
  value?: string // текущее текущее выбранное значение
  onValueChange?: (value: string) => void // функция, которая вызывается при изменении выбранного значения
  disabled?: boolean // Отключение всей группы
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
