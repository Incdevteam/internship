import React from 'react'

import styles from './Typography.module.css'

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

interface TypographyProps {
  variant: TypographyVariant
  children: React.ReactNode
  className?: string
  color?: string
  align?: 'left' | 'center' | 'right'
  onClick?: () => void
}

export const Typography = ({
  variant,
  children,
  className = '',
  color,
  align = 'left',
  onClick,
}: TypographyProps) => {
  const classNames = `${styles[variant]} ${className}`

  const style = {
    ...(color ? { color } : {}),
    ...(align !== 'left' ? { textAlign: align } : {}),
  }

  return (
    <span className={classNames} style={style} onClick={onClick}>
      {children}
    </span>
  )
}
