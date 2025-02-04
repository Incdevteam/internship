import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Tabs } from 'radix-ui'

import s from './tabs.module.scss'

export interface TabType {
  disabled?: boolean
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
}

type CommonProps = {
  /** Use TabsContent components as children. */
  children?: ReactNode
  /** An array of objects with the value and title of the tab.
   *  {value: string, title: string}
   */
  tabs: TabType[]
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export type TabsProps = CommonProps

export const TabsSwitcher: FC<TabsProps> = ({
  children,
  className,
  fullWidth,
  tabs,
  variant = 'primary',
  ...rest
}) => {
  const classNames = {
    list: clsx(s.list, s[variant]),
    root: clsx(s.root, className),
    trigger: clsx(s.trigger, fullWidth && s['full-width'], s[variant]),
  }

  return (
    <Tabs.Root className={classNames.root} {...rest}>
      <Tabs.List className={classNames.list}>
        {tabs.map(tab => (
          <Tabs.Trigger
            className={classNames.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {/*<Typography variant="?????">*/}
            {tab.title}
            {/*</Typography>*/}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}

export interface TabContentProps {
  children: ReactNode
  /** A unique value that associates the trigger with a content. */
  value: string
}

export const TabContent: FC<TabContentProps> = ({ children, value }) => {
  return (
    <Tabs.Content className={s.content} value={value}>
      {children}
    </Tabs.Content>
  )
}
