import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import clsx from 'clsx'
import { Typography } from 'shared/ui/typography'

import s from './TextArea.module.scss'

type TextAreaProps = {
  label?: string
  errorMessage?: string
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>

export const TextArea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, errorMessage, placeholder, className, onChange, onValueChange, ...restProps }, ref) => {
    const showError = !!errorMessage && errorMessage.length > 0

    const inputValueChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      box: clsx(s.box, className),
      label: clsx(s.label),
      textArea: clsx(s.textarea),
      error: clsx(s.error),
    }

    return (
      <div className={s.box}>
        {label && (
          <Typography className={s.label} variant={'regular-small'}>
            {label}
          </Typography>
        )}
        <textarea
          className={classNames.textArea}
          ref={ref}
          onChange={inputValueChangeHandler}
          {...restProps}
          placeholder={placeholder}
          // disabled={disabled}
        />

        {showError && (
          <Typography className={classNames.error} variant={'regular-small'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
