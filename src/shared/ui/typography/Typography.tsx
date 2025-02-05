import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import styles from './Typography.module.scss'

type TypographyVariant =
  | 'large'
  | 'heading'
  | 'subheading'
  | 'section-heading'
  | 'regular-large'
  | 'bold-large'
  | 'regular-small'
  | 'medium-small'
  | 'bold-small'
  | 'small'
  | 'semi-bold-small'
  | 'link-regular'
  | 'link-small'

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
