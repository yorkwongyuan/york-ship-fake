import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './yk-menu'

export interface MenuItemProps {
  index: number;
  disable?: boolean;
  className?: string;
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disable, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('yk-menu-item', className, {
    'is-disabled': disable,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disable) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem