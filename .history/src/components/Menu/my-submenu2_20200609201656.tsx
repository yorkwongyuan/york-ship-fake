import React, { useState, FC, Children, useContext, FunctionComponentElement } from 'react'
import { MenuContext } from './my-menu'
import { MenuItemProps } from './my-menu-item'
import classNames from 'classnames'
interface SubMenus {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: FC<SubMenus> = ({ index, title, className, children }) => {
  let [isOpen, setIsOpen] = useState(false);
  let context = useContext(MenuContext)
  const classes = classNames('my-submenu', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    return Children.map(children, (child) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
    })
  }

  return (
    <>
      <li className={classes}>
        <div>{title}</div>
      </li>
    </>
  )
}