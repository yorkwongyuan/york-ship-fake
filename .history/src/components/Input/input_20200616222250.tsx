import React, { FC, ReactElement, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
type InputSize = 'lg' | 'sm'
interface InputProps {
  disabled?: boolean;
  size: InputSize;
  className?: string;
}

const Input: FC<InputProps> = (props) => {

}