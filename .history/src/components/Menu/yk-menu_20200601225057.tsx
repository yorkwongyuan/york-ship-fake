import React from 'react'
import classNames from 'classnames'

type menuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: menuMode;
  style?: React.CSSProperties
}