import React, { useContext } from 'react'
import classnames from 'classnames';
import { MenuContext } from './my-menu'
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, children } = props;
  const context = useContext(MenuContext)
  const classes = classnames('my-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <>
      <li onClick={handleClick} className={classes}>{children}</li>
    </>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem