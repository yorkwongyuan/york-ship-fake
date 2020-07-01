import React, { useContext } from 'react'
import classnames from 'classnames';
import { MenuContext } from './my-menu'
interface MenuItemProps {
  index: number;
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
    console.log(context.index, 'index')
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <>
      <li onClick={handleClick} className={classes}>{children}</li>
    </>
  )
}

export default MenuItem