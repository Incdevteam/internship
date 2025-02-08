import { ChangeEvent, ComponentPropsWithRef, forwardRef } from 'react'

import clsx from 'clsx'
import { Typography } from 'shared/ui/typography'

import s from './TextArea.module.scss'

type TextAreaProps = {
  label?: string
  errorMessage?: string
  onValueChange?: (text: string) => void
} & ComponentPropsWithRef<'textarea'>

export const TextArea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { label, errorMessage, disabled, className, onChange, onValueChange, ...restProps } =
      props
    const showError = !!errorMessage && errorMessage.length > 0

    const inputChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      root: clsx(s.root, className),
      label: clsx(s.label, disabled && s.disabled),
      textArea: clsx(s.textarea, errorMessage && s.error),
      error: s.error,
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography className={classNames.label} variant={'regular-text-14'}>
            {label}
          </Typography>
        )}
        <textarea
          ref={ref}
          className={classNames.textArea}
          onChange={inputChangeHandler}
          disabled={disabled}
          {...restProps}
        />

        {showError && (
          <Typography className={classNames.error} variant={'regular-text-14'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
