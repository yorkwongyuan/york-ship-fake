import React, { FC, ReactElement, InputHTMLAttributes, } from 'react'
import classNames from 'classnames'
type InputSize = 'lg' | 'sm'
// Omit 忽略掉InputHTMLAttributes<HTMLElement>中的size属性
interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size: InputSize;
  className?: string;
  append?: string | ReactElement;
  prepand?: string | ReactElement;
}

const Input: FC<InputProps> = (props) => {
  let { className, disabled } = props
  let classes = classNames('my-input', className, {
    'is-disabled': disabled
  })

  return (
    <>
      <input type="text" className={classes} />
    </>
  )
}