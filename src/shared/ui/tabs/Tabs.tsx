import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Tabs } from 'radix-ui'

import s from './tabs.module.scss'

import { Typography } from '../typography'

export interface TabType {
  title: string
  value: string
  disabled?: boolean
}

type CommonProps = {
  tabs: TabType[]
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export type TabsProps = CommonProps

export const TabsSwitcher = (props: TabsProps) => {
  const { children, className, fullWidth, tabs, variant = 'primary', ...rest } = props

  const classNames = {
    list: clsx(s.list, s[variant]),
    root: clsx(s.root, className),
    trigger: clsx(s.trigger, fullWidth && s['full-width'], s[variant]),
  }

  return (
    <Typography as={'div'} variant={'h3'}>
      <Tabs.Root className={classNames.root} {...rest}>
        <Tabs.List className={classNames.list}>
          {tabs.map(tab => (
            <Tabs.Trigger
              className={classNames.trigger}
              disabled={tab.disabled}
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {children}
      </Tabs.Root>
    </Typography>
  )
}

export interface TabContentProps {
  children: ReactNode
  value: string
}

export const TabContent = (props: TabContentProps) => {
  const { children, value } = props

  return (
    <Tabs.Content className={s.content} value={value}>
      {children}
    </Tabs.Content>
  )
}
