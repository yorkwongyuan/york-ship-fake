import React from 'react'
import classNames from 'classnames'

export interface MenuItemProps {
  index?: number;
  disable?: boolean;
  className?: string;
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disable, className, style, children } = props
  const classes = classNames('menu-item', className, {
    'is-disabled': disable
  })
  return (
    <li>
      {children}
    </li>
  )
}