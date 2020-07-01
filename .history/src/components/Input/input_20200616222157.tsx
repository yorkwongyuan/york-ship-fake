import React, { FC, ReactElement, InputHTMLAttributes } from 'react'
type InputSize = 'lg' | 'sm'
interface InputProps {
  disabled?: boolean;
  size: InputSize
}