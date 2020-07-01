import React from 'react'
import classNames from 'classnames'

type menuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: menuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props
  const classes = classNames('yk-menu', className, {
    'yk-menu-vertical': mode === 'vertical',
    'yk-menu-horizontal': mode === 'horizontal'
  })
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}