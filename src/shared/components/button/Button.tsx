import { ComponentPropsWithoutRef, JSX } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type ButtonType = 'button' | 'submit' | 'reset'

type Props = {
  variant?: 'primary' | 'secondary' | 'outlined'
  type?: ButtonType
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  variant = 'primary',
  className,
  type = 'button',
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'} // Тривиальное тернарное выражение
      className={clsx(s.button, s[variant], className)}
      {...rest}
    />
  )
}
