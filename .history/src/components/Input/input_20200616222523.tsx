import React, { FC, ReactElement, InputHTMLAttributes, } from 'react'
import classNames from 'classnames'
type InputSize = 'lg' | 'sm'
// Omit 忽略掉InputHTMLAttributes<HTMLElement>中的size属性
interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size: InputSize;
  className?: string;
}

const Input: FC<InputProps> = (props) => {
  let { className } = props
}