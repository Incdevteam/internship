import React, { ComponentPropsWithoutRef, JSX } from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, ...props }: Props): JSX.Element => {
  return (
    <div className={clsx(className, styles.root)} {...props}>
      {children}
    </div>
  )
}
