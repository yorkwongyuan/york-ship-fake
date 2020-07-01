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
  const { index, disabled, className } = props;
  const context = useContext(MenuContext)
  const classes = classnames('my-menu-item', className, {
    'is-disabled': disabled
  })
  return (
    <>
      <li ></li>
    </>
  )

}