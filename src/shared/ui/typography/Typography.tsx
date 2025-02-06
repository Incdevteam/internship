import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import styles from './Typography.module.scss'

type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'regular-text-16'
  | 'bold-text-16'
  | 'regular-text-14'
  | 'medium-text-14'
  | 'bold-text-14'
  | 'small-text'
  | 'semi-bold-small-text'
  | 'regular-link'
  | 'small-link'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'p'

  const { className, style, ...restProps } = props

  const classNames = clsx(styles[variant], className)

  return (
    <Component className={classNames} style={style} {...restProps}>
      {children}
    </Component>
  )
}
