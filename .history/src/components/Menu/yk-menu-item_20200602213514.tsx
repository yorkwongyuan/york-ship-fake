import React from 'react'
import classNames from 'classnames'

interface MenuItemProps {
  index?: number;
  disable?: boolean;
  className?: string;
  style?: React.CSSProperties
}

export enum hehe {
  name = 'york',
  age = 123
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