import { ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'

type Props = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, ...props }: Props) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {children}
    </div>
  )
}
