import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Tabs } from 'radix-ui'

import s from './tabs.module.scss'

import { Typography } from '../typography'

export interface TabType {
  /** The title displayed on the tab. */
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
  /** Indicates if the tab is disabled. */
  disabled?: boolean
}

type CommonProps = {
  /** An array of objects with the value and title of the tab.
   *  {value: string, title: string}
   */
  tabs: TabType[]
  /** Variant of the tabs, can be 'primary' or 'secondary'. */
  variant?: 'primary' | 'secondary'
  /** If true, the tabs will take the full width of the container. */
  fullWidth?: boolean
  /** Use TabsContent components as children. */
  children?: ReactNode
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
            {/*<Typography variant="section-heading">*/}
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
  /** The content to be displayed when the tab is active. */
  children: ReactNode
  /** A unique value that associates the trigger with a content. */
  value: string
}

/** A component that renders the content associated with a tab. */

export const TabContent: FC<TabContentProps> = ({ children, value }) => {
  return (
    <Tabs.Content className={s.content} value={value}>
      {children}
    </Tabs.Content>
  )
}
