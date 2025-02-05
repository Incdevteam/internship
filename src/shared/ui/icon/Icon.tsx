import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Icon.module.scss'

import { getIconName } from './model/selectors'
import { IconName } from './model/types'

type IconProps = {
  name: IconName
  theme?: 'solid' | 'outline'
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({ name, theme, ...props }: IconProps) => {
  const { className, style, ...restProps } = props
  const iconName = getIconName(name, theme)
  const classNames = clsx(styles.icon, className)

  return (
    <svg className={classNames} style={style} {...restProps}>
      <use href={`/icons/sprite.svg#${iconName}`} />
    </svg>
  )
}
