import React from 'react'
import classNames from 'classnames'
import { MenuContext } from './yk-menu'
export interface MenuItemProps {
  index?: number;
  disable?: boolean;
  className?: string;
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disable, className, style, children } = props
  const classes = classNames('yk-menu-item', className, {
    'is-disabled': disable
  })
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default MenuItem